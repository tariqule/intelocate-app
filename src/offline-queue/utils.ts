import { isServerErrorResponse } from '@intelocate/api-services';
import { tryHttpCall } from '../services/utils';
import {
    QueueItemAction, HttpSource, SubmitIssueAction, CheckInAtLocationAction, VerifyTagAction,
    QueueItem
} from './types';
import { MAX_ATTEMPTS_COUNT } from './constants';


type Response = { id: number; done: boolean; };

async function handleResponse(id: number, requester: () => Promise<any>): Promise<Response> {
    const response = await tryHttpCall(requester, false);
    if (isServerErrorResponse(response) || response === false) {
        return { id, done: false };
    }
    return { id, done: true };
}

function addDeltaForRequest(item: QueueItemAction): QueueItemAction {
    const now = new Date();
    item.data.delta = now.getTime() - item.timestamp;
    return item;
}
export function getRequest(
    id: number, item: QueueItemAction, source: HttpSource
): Promise<Response> {
    const itemWithDelta = addDeltaForRequest(item);
    if (itemWithDelta.type === 'submit-issue') {
        return handleResponse(id, () => source.createSimpleTaskTree(itemWithDelta.data));
    } else if (itemWithDelta.type === 'check-in-at-location') {

        return handleResponse(id, () => source.checkInAtLocation(itemWithDelta.data));
    }
    return handleResponse(id, () => source.verifyExternalTag(itemWithDelta.data));
}

export function filterActionsInQueue(item: QueueItem): boolean {
    return item.done === false || item.attempts < MAX_ATTEMPTS_COUNT;
}

export function isSubmitIssueAction(act: QueueItemAction): act is SubmitIssueAction {
    return act.type === 'submit-issue';
}

export function isCheckInAtLocationAction(act: QueueItemAction): act is CheckInAtLocationAction {
    return act.type === 'check-in-at-location';
}

export function isVerifyTagAction(act: QueueItemAction): act is VerifyTagAction {
    return act.type === 'verify-tag';
}
