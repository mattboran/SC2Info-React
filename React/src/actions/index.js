import * as userConstants from './constants';
import { history } from '../storeIndex';
import { registerUser, registerWithoutAxios } from '../lib/api';
import axios from 'axios';

export const userActions = {
  login:null,
  logout: null,
  // register,
  testRegister
//TODO: add
}

const AXIOS_CONFIG = {
  proxy: {
    host: '127.0.0.1',
    port: 3001
  }
}

export function testRegister(user){

  return dispatch =>{
    dispatch(request(user));

    registerWithoutAxios(user)
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

// export function register(user) {
//   console.log('we made it to register');
//     return (dispatch) => {
//       console.log("Dispatching!")
//
//       dispatch(request(user));
//         return registerUser(user)
//             .then(
//                 user => {
//                     dispatch(success(user));
//                     history.push('/SignIn');
//                     console.log("Registered!");
//                 },
//                 error => {
//                     dispatch(failure(error));
//                     console.log("Error, was "+error);
//                 }
//             );
//     };
//     function request(user) {
//       //console.log("Dispatching a request of type REGISTER_REQUEST");
//       return { type: actionConstants.REGISTER_REQUEST, user }
//     }
//     function success(user) { return { type: actionConstants.REGISTER_SUCCESS, payload: {user} } }
//     function failure(error) { return { type: actionConstants.REGISTER_FAILURE, payload: {error} } }
// }

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
