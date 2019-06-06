import axios from "axios";
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "./authActionTypes";

export const tokenConfig = () => {
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
};

export const loadUser = () => {

    const token = tokenConfig();

    const axiosPromise = axios.get(`${window.apiHost}/auth/getUserInfo`, token);
    
    return{
        type : USER_LOADED,
        payload : axiosPromise
    }
};

export const registerUser = (username, password) => {

    const config = {
        headers : {
            "Content-type" : "application/json"
        }
    };

    const requestBody = JSON.stringify({
        username,
        password,
    });

    const axiosPromise = axios.post(`${window.apiHost}/auth/register`, requestBody, config);
    
    return{
        type : REGISTER_SUCCESS,
        payload : axiosPromise
    }
};

export const loginUser = (username, password) => {

    const config = {
        headers : {
            "Content-type" : "application/json"
        }
    };

    const requestBody = JSON.stringify({
        username,
        password
    });

    const axiosPromise = axios.post(`${window.apiHost}/auth/login`, requestBody, config);

    return {
        type : LOGIN_SUCCESS,
        payload : axiosPromise
    }
        

};

export const logoutUser = () => {
    return({
        type : LOGOUT_SUCCESS
    });
};