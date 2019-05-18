import axios from "axios";

export default (userData) => {
    const axiosPromise = axios({
        url : `${window.apiHost}/auth/register`,
        method : "",
        data : userData
    })
    return {
        type : "REGISTER_ACTION",
        payload : axiosPromise
    }
}