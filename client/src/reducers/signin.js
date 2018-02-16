import * as userConstants from '../actions/constants';

export default function login(state = {}, action) {
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return{
                ...state,
                loggingIn: true,
                loginError: false,
            };
        case userConstants.RELOG_REQUEST:
            return{
                ...state,
                loggingIn: true,
                loginError: false
            }
        case userConstants.LOGIN_SUCCESS:
            console.log("Action.payload: ", action.payload);
            const { sessId, username, email, token } = action.payload.user;
            return {
                ...state,
                loggingIn: false,
                loginError: false,
                auth: {
                    sessId,
                    username,
                    email,
                    token
                }
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
                ...state,
                auth: null
            };
        default:
            return state;
    }
}
