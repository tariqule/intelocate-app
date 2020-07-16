import {GET_USER_NAME, GET_TOKEN, GET_ORG_ID} from './../../action/user/types';

const user = {
  username: '',
  token: '',
  organizationId: '',
};
const userReducer = (state = user, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return {...state, username: action.payload};
    case GET_TOKEN:
      return {...state, token: action.payload};
    case GET_ORG_ID:
      return {...state, organizationId: action.payload};
    default:
      return state;
  }
};
export default userReducer;
