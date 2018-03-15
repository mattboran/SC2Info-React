// import * as userConstants from './constants';
// import { history } from '../storeIndex';
// import { registerUser, loginUser } from '../lib/api';
import { register, login, logout, returningLogin } from './user';
import { changeRegion,
    selectLadder,
    selectPlayer,
    searchPlayer,
    clearSearchPlayer } from './view';

export const userActions = {
    login,
    logout,
    register,
    returningLogin,
}
export const viewActions = {
    changeRegion,
    selectLadder,
    selectPlayer,
    searchPlayer,
    clearSearchPlayer
}
