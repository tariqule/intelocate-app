import {SELECTED_ACTION, LOADING, DID_SUBMIT} from '../../action/issue-action';

const initialState = {
  loading: false,
  didSubmit: false,
  selectedAction: [],
};

const issueActon = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ACTION:
      console.log(
        JSON.stringify(state) +
          ' ===> From [redux] [reducer] [selected-action]',
      );
      return {
        ...state,
        selectedAction: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DID_SUBMIT:
      return {
        ...state,
        didSubmit: action.payload,
      };

    default:
      return state;
  }
};
export default issueActon;
