import axios from "axios";
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "./authActionTypes";

export const getToken = () => {
    const token = localStorage.getItem("token");

    const config = {
        headers : {
            "Content-type" : "application/json"
        }
    }

    if(token){
        config.headers["x-auth-token"] = token;
    }

    return config;
}

export const loadUser = (dispatch, getState) => {
    dispatch({
        type : USER_LOADING
    });

    axios.get(`${window.apiHost}/getUserInfo`)
        .then(response => {
            dispatch({
                type : USER_LOADED,
                payload : response.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.statuserr.response.status));
            dispatch({
                type : AUTH_ERROR
            })
        });
}