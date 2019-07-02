import {
    CHECK_TOKEN_ACTION,
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
        case CHECK_TOKEN_ACTION:
            if(action.payload.data.token){
                localStorage.setItem("token", action.payload.data.token);
            } else {
                localStorage.removeItem("token");
            }
            return {
                ...action.payload.data,
            };
        case LOGIN_ACTION:
                localStorage.setItem("token", action.payload.data.token)
            return {
                ...action.payload.data,
            };
        case LOGOUT_ACTION:
            localStorage.removeItem("token");
            return {
                ...action.payload.data,
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