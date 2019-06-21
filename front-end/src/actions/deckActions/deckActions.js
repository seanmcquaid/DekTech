import axios from "axios";
import {
    GET_DECK_ACTION,
    ADD_TO_DECK_ACTION,
    REMOVE_FROM_DECK_ACTION,
    CLEAR_DECK_ACTION,
} from "./deckActionTypes";
import {tokenConfig} from "../authActions/authActions";

export const getDeckAction = () => {
    const token = tokenConfig();
    const axiosPromise = "";
    return {
        type : GET_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const addToDeckAction = card => {
    const token = tokenConfig();
    console.log(card)
    const requestBody = {
        card
    };
    const axiosPromise = axios.post(`${window.apiHost}/deck/addToDeck`, requestBody, token);
    return {
        type : ADD_TO_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const removeFromDeckAction = card => {
    const token = tokenConfig();
    const requestBody = "";
    const axiosPromise = "";
    return {
        type : REMOVE_FROM_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const clearDeckAction = () => {
    const token = tokenConfig();
}