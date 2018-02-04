import * as userConstants from '../actions/constants';

export default function registration(state={}, action){
  switch(action.type){
    case userConstants.REGISTER_REQUEST:

      return {
         ...state,
        registering: true,
        registerError: false
       };
    case userConstants.REGISTER_SUCCESS:

      return {
          ...state,
          registering: false,
          registerError: false
        };
    case userConstants.REGISTER_FAILURE:
      return {
          ...state,
          registering: false,
          registerError: action.payload
        };
    default:
      return state;
  }
}
