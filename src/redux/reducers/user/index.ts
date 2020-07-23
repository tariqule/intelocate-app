import {
  GET_USER_NAME,
  GET_TOKEN,
  GET_ORG_ID,
  EXTERNAL_USERS,
} from './../../action/user/types';

const user = {
  username: '',
  token: '',
  organizationId: '',
  externalUsers: [],
};
const userReducer = (state = user, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return {...state, username: action.payload};
    case GET_TOKEN:
      return {...state, token: action.payload};
    case GET_ORG_ID:
      return {...state, organizationId: action.payload};
    case EXTERNAL_USERS:
      return {...state, externalUsers: action.payload};
    default:
      return state;
  }
};
export default userReducer;
