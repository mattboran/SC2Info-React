import * as constants from './constants/constants';
import { history } from '../storeIndex';

export const loginActions = {
  login,
  logout,
  register,
//TODO: add
}

function requestLogin(username, pass){
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/LadderInfo');
          console.log("Login success for "+user);
        },
        error => {
          dispatch(failure(error));
          console.log("There was an error logging in. Error = "+error);
        }
      );
  };
  function request(user) { return { type: constants.LOGIN_REQUEST, user }}
  function success(user) { return { type: constants.LOGIN_SUCCESS, user }}
  function failure(user) { return { type: constants.LOGIN_FAILURE, error }}
}

function logout() {
  userService.logout();
  return { type: constants.LOGOUT_REQUEST };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    userService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/SignIn');
          console.log("Register success for "+user);
        },
        error => {
          dispatch(failure(error));
          console.log("Register failure , error = "+error);
        }
      );
  };
  function request(user) { return { type: constants.REGISTER_REQUEST, user }}
  function success(user) { return { type: constants.REGISTER_SUCCESS, user }}
  function failure(user) { return { type: constants.REGISTER_FAILURE, error }}
}
