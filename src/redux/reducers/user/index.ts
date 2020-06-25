import {GET_USER_NAME} from './../../action/user/types';

const user = {
  username: '',
};
const userReducer = (state = user, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return {...state, username: action.payload};

    default:
      return state;
  }
};
export default userReducer;
