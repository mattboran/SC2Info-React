import * as userConstants from '../actions/constants';

export default function login(state = {}, action) {
  switch(action.type){
    case userConstants.LOGIN_REQUEST:
      return{
        ...state,
        loggingIn: true,
        loginError: false
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loginError: false
      };
    case userConstants.LOGIN_FAILURE:
      console.log("Action we got for login failure was ", JSON.stringify(action));
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload
      };
    default:
      return state;
  }
}
