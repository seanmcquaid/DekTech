import axios from "axios";

export default userData => {
    const axiosPromise = axios({
        url : `${window.apiHost}/auth/checkSession`,
        method : "GET"
    });
    return {
        type : "CHECK_SESSION_ACTION",
        payload : axiosPromise
    };
}