import { registerUser, loginUser, checkReturningUser } from '../lib/api';
import { history } from '../storeIndex';
import * as userConstants from './constants';

export function register(user){
  return dispatch =>{
    dispatch(request(user));

    registerUser(user)
      .then(
        user => {
          dispatch(success(user));
          history.replace('/SignIn');
        },
        error => {
          dispatch(failure(error));
        }
      );
  };
  function request(user) { return { type: userConstants.REGISTER_REQUEST, payload: {user} } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, payload: {user} } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, payload: {error} } }
};

export function login(user){
  return dispatch => {
    dispatch(request(user));

    loginUser(user)
      .then(
        user => {
          dispatch(success(user));
          history.push('/News');
          console.log('Successful login of ', user.username);
        },
        error => {
          dispatch(failure(error));
        }
      );
  };
  function request(user) { return { type: userConstants.LOGIN_REQUEST, payload: { user } } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload: { user } } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, payload: { error } } }
}

export function returningLogin(){
    return dispatch => {
        dispatch(request());
        checkReturningUser()
            .then(
                user => {
                    dispatch(success(user));
                    console.log('Successful relog of ', user.username);
                    },
                error => {
                    dispatch(failure(error));
                }
            );
    };
    function request(user) { return { type: userConstants.RELOG_REQUEST, payload: { user } } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload: { user } } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, payload: { error } } }
}

export function logout(){
  return dispatch => {
    dispatch({ type: userConstants.LOGOUT });
  };
}
