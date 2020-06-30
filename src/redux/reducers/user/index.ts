import {GET_USER_NAME, GET_TOKEN} from './../../action/user/types';

const user = {
  username: '',
  token: '',
};
const userReducer = (state = user, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return {...state, username: action.payload};
    case GET_TOKEN:
      return {...state, token: action.payload};
    default:
      return state;
  }
};
export default userReducer;
