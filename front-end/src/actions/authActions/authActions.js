import axios from "axios";
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
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

    axios.get(`${window.apiHost}/auth/getUserInfo`, token)
        .then(response => {
            return{
                type : USER_LOADED,
                payload : response.data
            }
        })
        .catch(err => {
            return{
                type : AUTH_ERROR,
                payload: {
                    errResponse : err.response.data,
                    errStatus : err.response.status
                }
            }
        });
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

    axios.post(`${window.apiHost}/auth/register`, requestBody, config)
        .then(response => {
            return {
                type : REGISTER_SUCCESS,
                payload : response.data
            }
        })
        .catch(err => {
            return{
                type : REGISTER_FAIL,
                payload: {
                    errResponse : err.response.data,
                    errStatus : err.response.status
                }
            }
        })

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