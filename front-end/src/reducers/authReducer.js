import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../actions/authActions/authActionTypes";

const initialState = {
    token : localStorage.getItem("token"),
    isAuthenticated : null,
    userInfo : null
};

export default (state = initialState, action) => {
    switch(action.type){
        case USER_LOADED:
        case AUTH_ERROR:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.data.token)
            return action.payload.data;
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return initialState;
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.data.token)
        case REGISTER_FAIL:
        default :
            return state;
    }
}