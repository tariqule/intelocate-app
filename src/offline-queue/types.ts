import { IObservableArray } from 'mobx';
import {
    CreateSimpleTaskTreeRequest, CheckInAtLocationRequest, VerifyExternalTagRequest,
    CheckInAtLocation, VerifyExternalTag, CreateSimpleTaskTree
} from '@intelocate/api-services';
import {} from '../services';


export interface SubmitIssueAction {
    type: 'submit-issue';
    data: CreateSimpleTaskTreeRequest;
    timestamp: number;
}

export interface CheckInAtLocationAction {
    type: 'check-in-at-location';
    data: CheckInAtLocationRequest;
    timestamp: number;
}

export interface VerifyTagAction {
    type: 'verify-tag';
    data: VerifyExternalTagRequest;
    timestamp: number;
}

export type QueueItemAction = SubmitIssueAction | CheckInAtLocationAction | VerifyTagAction;

export interface QueueItemInput {
    name: string;
    subTitle: string;
    action: QueueItemAction;
}

export interface QueueItem extends QueueItemInput {
    id: number;
    attempts: number;
    done: boolean;
}

export type OfflineQueue = IObservableArray<QueueItem>;

export interface HttpSource {
    checkInAtLocation: CheckInAtLocation;
    verifyExternalTag: VerifyExternalTag;
    createSimpleTaskTree: CreateSimpleTaskTree;
}

export interface PersistentSource {
    getOfflineQueue: (otherwise: OfflineQueue) => Promise<OfflineQueue>;
    setOfflineQueue: (data: OfflineQueue) => Promise<void>;
}
