import {ACTION_STATS, TOTAL_COUNT} from '../../action/stats';

const initialState = {
  stats: [],
  totalCnt: '',
};

const actionStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_STATS:
      console.log(
        JSON.stringify(state) +
          ' ===> From [redux] [reducer] [actionStats-action]',
      );
      return {
        ...state,
        stats: action.payload,
      };
    case TOTAL_COUNT:
      return {
        ...state,
        totalCnt: action.payload,
      };

    default:
      return state;
  }
};
export default actionStatsReducer;
