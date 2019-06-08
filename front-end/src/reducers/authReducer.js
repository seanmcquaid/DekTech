import {
    LOAD_USER_ACTION,
    LOGIN_ACTION,
    LOGOUT_ACTION,
    REGISTER_ACTION,
} from "../actions/authActions/authActionTypes";

const initialState = {
    token : localStorage.getItem("token"),
    message : "",
    isAuthenticated : null,
    userInfo : null
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOAD_USER_ACTION:
        case LOGIN_ACTION:
                localStorage.setItem("token", action.payload.data.token)
            return {
                ...action.payload.data,
            };
        case LOGOUT_ACTION:
            localStorage.removeItem("token");
            return {
                ...initialState,
            };
        case REGISTER_ACTION:
            localStorage.setItem("token", action.payload.data.token);
            return {
                ...action.payload.data,
            }
        default :
            return {
                ...state,
            }
    }
}