import {
    CHECK_TOKEN_ACTION,
    LOGIN_ACTION,
    LOGOUT_ACTION,
    REGISTER_ACTION,
} from "../actions/authActions/authActionTypes";

const initialState = {
    token : "",
    message : "",
    isAuthenticated : null,
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
            console.log(action.payload.data)
            localStorage.setItem("token", action.payload.data.token)
            return ({
                token : action.payload.data.token,
                message : action.payload.data.message,
                isAuthenticated : action.payload.data.isAuthenticated,
            });
        case LOGOUT_ACTION:
            localStorage.removeItem("token");
            return {
                ...action.payload.data,
            };
        case REGISTER_ACTION:
            if(action.payload.data.token !== ""){
                localStorage.setItem("token", action.payload.data.token)
            } else {
                localStorage.setItem("token", "")
            }
            return {
                ...action.payload.data,
            }
        default :
            return {
                ...state,
            }
    }
}