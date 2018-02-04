import * as userConstants from '../actions/constants';

export default function login(state = {}, action) {
  switch(action.type){
    case userConstants.LOGIN_REQUEST:
      return{
        ...state,
        loggingIn: true,
        loginError: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loginError: false,
        auth: action.payload
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload
      };
    case userConstants.LOGOUT:
      console.log("Logging out");
      return {
        auth:{
          user: ''
        }
      };
    default:
      return state;
  }
}
