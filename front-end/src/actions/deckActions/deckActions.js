import axios from "axios";
import {
    GET_DECK_ACTION,
    ADD_CARD_TO_DECK_ACTION,
    REMOVE_CARD_FROM_DECK_ACTION,
    CLEAR_DECK_ACTION,
    ADD_LANDS_TO_DECK_ACTION,
    REMOVE_LANDS_FROM_DECK_ACTION,
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

export const addCardToDeckAction = card => {
    const token = tokenConfig();
    const requestBody = {
        name : card.name,
        imageUrl : card.image_uris.small,
        convertedManaCost : card.cmc,
        power : card.power,
        toughness : card.toughness,
        type : card.type_line,
        cardText : card.oracle_text,
        cardId : card.id,
    };
    const axiosPromise = axios.post(`${window.apiHost}/deck/addCardToDeck`, requestBody, token);
    return {
        type : ADD_CARD_TO_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const addLandsToDeckAction = numberOfLandsToAdd => {
    const token = tokenConfig();
    const requestBody = {numberOfLandsToAdd};
    const axiosPromise = axios.post(`${window.apiHost}/deck/addLandsToDeck`, requestBody, token);
    return {
        type : ADD_LANDS_TO_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const removeCardFromDeckAction = card => {
    const token = tokenConfig();
    const requestBody = {
        cardId : card.cardId
    }
    const axiosPromise = axios.post(`${window.apiHost}/deck/removeCardFromDeck`, requestBody, token);
    return {
        type : REMOVE_CARD_FROM_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const removeLandsFromDeckAction = numberOfLandsToRemove => {
    const token = tokenConfig();
    const requestBody = {numberOfLandsToRemove};
    const axiosPromise = axios.post(`${window.apiHost}/deck/removeLandsFromDeck`, requestBody, token);
    return {
        type : REMOVE_LANDS_FROM_DECK_ACTION,
        payload : axiosPromise,
    }
}

export const clearDeckAction = () => {
    const token = tokenConfig();
    const requestBody = {};
    const axiosPromise = axios.post(`${window.apiHost}/deck/clearDeck`, requestBody, token);
    return {
        type : CLEAR_DECK_ACTION,
        payload : axiosPromise,
    }
}