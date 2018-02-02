import * as userConstants  from '../actions/constants';

export default function registration(state={}, action){
  console.log("Reducer for registration was invoked!");
  switch(action.type){
    case userConstants.REGISTER_REQUEST:
      console.log("Submitting a register request via reducer");
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {  };
    case userConstants.REGISTER_FAILURE:
      return {  };
    default:
      console.log("Got to default in registration reducer.");
      return state;
  }
}
