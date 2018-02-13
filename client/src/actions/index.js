// import * as userConstants from './constants';
// import { history } from '../storeIndex';
// import { registerUser, loginUser } from '../lib/api';
import {register, login, logout} from './user';
import { changeRegion, selectLadder, selectPlayer } from './view';

export const userActions = {
  login,
  logout,
  register
}
export const viewActions = {
  changeRegion,
  selectLadder,
  selectPlayer
}
