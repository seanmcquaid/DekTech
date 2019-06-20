import axios from "axios";
import {
    LOAD_USER_ACTION,
    LOGIN_ACTION,
    LOGOUT_ACTION,
    REGISTER_ACTION,
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

export const loadUserAction = () => {

    const token = tokenConfig();

    const axiosPromise = axios.get(`${window.apiHost}/auth/getUserInfo`, token);
    
    return{
        type : LOAD_USER_ACTION,
        payload : axiosPromise
    }
};

export const registerAction = (registerData) => {

    const config = {
        headers : {
            "Content-type" : "application/json"
        }
    };

    const axiosPromise = axios.post(`${window.apiHost}/auth/register`, registerData, config);
    
    return{
        type : REGISTER_ACTION,
        payload : axiosPromise
    }
};

export const loginAction = (loginData) => {

    const config = {
        headers : {
            "Content-type" : "application/json"
        }
    };

    const axiosPromise = axios.post(`${window.apiHost}/auth/login`, loginData, config);

    return {
        type : LOGIN_ACTION,
        payload : axiosPromise
    }
        

};

export const logoutAction = () => {
    const axiosPromise = "make logout in backend";
    return({
        type : LOGOUT_ACTION,
        payload : axiosPromise,
    });
};