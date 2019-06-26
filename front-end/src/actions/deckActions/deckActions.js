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
    const axiosPromise = axios.get(`${window.apiHost}/deck/getDeck`, token);
    return {
        type : GET_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const addToDeckAction = card => {
    const token = tokenConfig();
    const requestBody = {
        name : card.name,
        imageUrl : card.image_uris.small,
        convertedManaCost : card.cmc,
        power : card.power,
        toughness : card.toughness,
        cardText : card.oracle_text,
        cardId : card.id,
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
    const axiosPromise = "";
    return {
        type : CLEAR_DECK_ACTION,
        payload : axiosPromise,
    }
}