import {Queue} from './../../../offline-queue/queue';
import {
  queueStorage,
  retrieveQueueStorage,
} from './../../../services/local-storage/index';
import Axios from 'axios';
import {
  checkInternetConnection,
  offlineActionCreators,
} from 'react-native-offline';

export const SELECTED_ACTION = 'SELECTED_ACTION';

type ActionToBeQueued = {
  type: string;
  payload?: any;
  meta: {
    retry?: boolean; // By passing true, your action will be enqueued on offline mode
    dismiss?: Array<string>; // Array of actions which, once dispatched, will trigger a dismissal from the queue
  };
};

export const selectedAction = (issueResponse: ActionToBeQueued) => ({
  type: SELECTED_ACTION,
  payload: issueResponse,
});
