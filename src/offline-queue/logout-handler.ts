import { toJS } from 'mobx';
import { OfflineQueue, PersistentSource } from './types';
import { Queue } from './queue';


type PersistAndFlushAction = (q: OfflineQueue) => (s: PersistentSource) => void;
const getPersistAndFlushAction: PersistAndFlushAction = queue => async storage => {
    await storage.setOfflineQueue(toJS(queue));
    queue.splice(0, queue.length);
};

export const persistAndFlush = getPersistAndFlushAction(Queue);
