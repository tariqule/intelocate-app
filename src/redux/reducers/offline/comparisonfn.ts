import {EnqueuedAction} from 'react-native-offline/dist/src/types';
import isEqual from 'lodash/isEqual';

export function comparisonFn(action: any, actionQueue: EnqueuedAction[]) {
  if (typeof action === 'object') {
    return actionQueue.find((queued) => isEqual(queued, action));
  }
  if (typeof action === 'function') {
    return actionQueue.find(
      (queued) =>
        action.meta.name === queued.meta!.name &&
        action.meta.args.id === queued.meta!.args.id,
    );
  }
  return undefined;
}
