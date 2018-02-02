import * as userConstants from './constants';
import { history } from '../storeIndex';
import { registerUser } from '../lib/api';

export const userActions = {
  login:null,
  logout: null,
  register
//TODO: add
}

export function register(user){

  return dispatch =>{
    dispatch(request(user));

    registerUser(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          console.log("success register!");
        },
        error => {
          dispatch(failure(error));
          console.log("Fail register!");
        }
      );
  };
  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
};
