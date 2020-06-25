import { UnreadMessages } from '@intelocate/api-services';

interface Task {
    envelopeId: string;
    id: string;
}

export function hasUnreadMessagesFromTask(
    task: Task, unread: UnreadMessages | null
): boolean {
    if (!unread) {
        return false;
    }
    const hasMatchByEnvelope = unread.envelopes.filter(e => e.id === task.envelopeId).length > 0;
    const hasMatchByTaskId = unread.envelopes.filter(e => e.taskId === task.id).length > 0;
    return hasMatchByEnvelope || hasMatchByTaskId;
}

export function hasUnreadMessagesFromTaskAndChildren(
    task: Task, unread: UnreadMessages | null
): boolean {
    if (!unread) {
        return false;
    }
    const hasMatchByTaskParentId = unread.envelopes.filter(
        e => (e.taskParentIds || []).indexOf(task.id) > -1
    ).length > 0;
    return hasUnreadMessagesFromTask(task, unread) || hasMatchByTaskParentId;
}
