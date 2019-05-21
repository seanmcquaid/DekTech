import axios from "axios";

export default (userData) => {
    const axiosPromise = axios({
        url : `${window.apiHost}/auth/login`,
        method : "POST",
        data : userData
    })
    return {
        type : "LOGIN_ACTION",
        payload : axiosPromise
    }
}