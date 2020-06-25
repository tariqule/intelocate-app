import { observable } from 'mobx';
import { OfflineQueue } from './types';


export const Queue: OfflineQueue = observable.array([], { deep: false });
