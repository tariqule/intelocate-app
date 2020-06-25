import { asyncForEach } from "@intelocate/utils";
import { toJS } from "mobx";
import { wait } from "../utils";
import {
  HttpDataSource,
  PersistentStorage,
  InternetConnection
} from "../services";
import {
  OfflineQueue,
  QueueItemInput,
  HttpSource,
  PersistentSource
} from "./types";
import { Queue } from "./queue";
import { getRequest, filterActionsInQueue } from "./utils";
import { TIMEOUT_DELAY } from "./constants";

type InitAction = (
  q: OfflineQueue,
  s: PersistentSource,
  p: () => void
) => () => void;
const getInitAction: InitAction = (queue, storage, update) => async () => {
  const savedQueue = await storage.getOfflineQueue(queue);
  if (savedQueue === queue) {
    return;
  }
  savedQueue.forEach(val => {
    const has = queue.filter(v => v.id === val.id).length > 0;
    if (has === true) {
      return;
    }
    queue.push(val);
  });
  if (queue.length > 0) {
    releaseQueue();
  }
  update();
};

export const init = getInitAction(
  Queue,
  PersistentStorage,
  subscribeProgressUpdate
);

type AddItemAction = (
  q: OfflineQueue,
  s: PersistentSource
) => (a: QueueItemInput) => void;
const getAddItemAction: AddItemAction = (queue, storage) => async action => {
  queue.push({ ...action, attempts: 0, done: false, id: new Date().getTime() });
  await storage.setOfflineQueue(toJS(queue));
};

export const addItem = getAddItemAction(Queue, PersistentStorage);

type ProcessQueueAction = (
  q: OfflineQueue,
  c: HttpSource,
  s: PersistentSource,
  i: () => Promise<boolean>
) => () => Promise<boolean>;
const getProcessQueueAction: ProcessQueueAction = (
  queue,
  source,
  storage,
  isConnected
) => async () => {
  await asyncForEach(async item => {
    if ((await isConnected()) === false) {
      return;
    }
    const response = await getRequest(item.id, item.action, source);
    item.done = response.done;
    item.attempts = item.attempts + 1;
    if (item.done) {
      queue.remove(item);
    }
    // Without this hack happens "Network request error". Reason? Interesting question!
    await wait(1000);
  }, queue.filter(filterActionsInQueue));
  await storage.setOfflineQueue(toJS(queue));
  return queue.every(v => v.done === true) || queue.length === 0;
};

export const processQueue = getProcessQueueAction(
  Queue,
  HttpDataSource,
  PersistentStorage,
  InternetConnection.isConnected
);

let inProgress = false;

export async function releaseQueue() {
  if (inProgress === true) {
    return;
  }
  inProgress = true;
  if ((await InternetConnection.isConnected()) === false) {
    inProgress = false;
    return;
  }
  const handler = (delay = TIMEOUT_DELAY) => {
    return async () => {
      const result = await processQueue();
      if (result === false) {
        setTimeout(handler(delay * 2), delay);
      } else {
        inProgress = false;
      }
    };
  };
  handler()();
}

function subscribeProgressUpdate() {
  InternetConnection.subscribeForChanges(data => {
    if (InternetConnection.hasConnection(data) === true) {
      inProgress = false;
    }
  });
}
