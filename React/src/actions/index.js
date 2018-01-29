import * as actionConstants from './constants';
import { history } from '../storeIndex';
import { registerUser } from '../lib/api';

export const userActions = {
  login:null,
  logout: null,
  register,
//TODO: add
}


function register(user) {
    return dispatch => {
        dispatch(request(user));

        registerUser(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/SignIn');
                    console.log("Registered!");
                },
                error => {
                    dispatch(failure(error));
                    console.log("Error, was "+error);
                }
            );
    };

    function request(user, email, password) { return { type: actionConstants.REGISTER_REQUEST, user, email, password } }
    function success(user) { return { type: actionConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: actionConstants.REGISTER_FAILURE, error } }
}
// function login(username, password){
//   return dispatch => {
//     dispatch(request({ username }));
//
//     userService.login(username, password)
//       .then(
//         user => {
//           dispatch(success(user));
//           history.push('/LadderInfo');
//           console.log("Login success for "+user);
//         },
//         error => {
//           dispatch(failure(error));
//           console.log("There was an error logging in. Error = "+error);
//         }
//       );
//   };
//   function request(user) { return { type: constants.LOGIN_REQUEST, user }}
//   function success(user) { return { type: constants.LOGIN_SUCCESS, user }}
//   function failure(error) { return { type: constants.LOGIN_FAILURE, error }}
// }
//
// function logout() {
//   userService.logout();
//   return { type: constants.LOGOUT_REQUEST };
// }
//
// function register(user) {
//   return dispatch => {
//     dispatch(request(user));
//     userService.register(user)
//       .then(
//         user => {
//           dispatch(success());
//           history.push('/SignIn');
//           console.log("Register success for "+user);
//         },
//         error => {
//           dispatch(failure(error));
//           console.log("Register failure , error = "+error);
//         }
//       );
//   };
//   function request(user) { return { type: constants.REGISTER_REQUEST, user }}
//   function success(user) { return { type: constants.REGISTER_SUCCESS, user }}
//   function failure(error) { return { type: constants.REGISTER_FAILURE, error }}
// }
