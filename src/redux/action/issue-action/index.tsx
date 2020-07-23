export const SELECTED_ACTION = 'SELECTED_ACTION';
export const LOADING = 'LOADING';
export const DID_SUBMIT = 'DID_SUBMIT';

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

export const loadingAction = (boolean) => ({
  type: LOADING,
  payload: boolean,
});

export const didSubmitAction = (boolean) => ({
  type: DID_SUBMIT,
  payload: boolean,
});
