import {
    CHECK_TOKEN_ACTION,
    LOGIN_ACTION,
    LOGOUT_ACTION,
    REGISTER_ACTION,
} from "../actions/authActions/authActionTypes";

const initialState = {
    token : null,
    message : "",
    isAuthenticated : false,
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
                token : action.payload.data.token,
                message : action.payload.data.message,
                isAuthenticated : action.payload.data.isAuthenticated,
            };
        case LOGIN_ACTION:
            localStorage.setItem("token", action.payload.data.token);
            return {
                token : action.payload.data.token,
                message : action.payload.data.message,
                isAuthenticated : action.payload.data.isAuthenticated,
            }
        case LOGOUT_ACTION:
            localStorage.removeItem("token");
            return {
                token : action.payload.data.token,
                message : action.payload.data.message,
                isAuthenticated : action.payload.data.isAuthenticated,
            };
        case REGISTER_ACTION:
            localStorage.setItem("token", action.payload.data.token)
            return {
                token : action.payload.data.token,
                message : action.payload.data.message,
                isAuthenticated : action.payload.data.isAuthenticated,
            }
        default :
            return {
                ...state,
            }
    }
}