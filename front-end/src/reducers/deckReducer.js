import {
    GET_DECK_ACTION,
    ADD_CARD_TO_DECK_ACTION,
    ADD_LANDS_TO_DECK_ACTION,
    REMOVE_CARD_FROM_DECK_ACTION,
    REMOVE_LANDS_FROM_DECK_ACTION,
    SET_COMMANDER_ACTION,
    REMOVE_COMMANDER_ACTION,
    CLEAR_DECK_ACTION,
} from "../actions/deckActions/deckActionTypes";
import {LOGOUT_ACTION, LOGIN_ACTION} from "../actions/authActions/authActionTypes";

const initialState = {
    cards : [],
    lands : 0,
    commander : "",
    message : ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DECK_ACTION :
            return {
                ...action.payload.data
            }
        case ADD_CARD_TO_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        case ADD_LANDS_TO_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        case REMOVE_CARD_FROM_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        case REMOVE_LANDS_FROM_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        case CLEAR_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        case SET_COMMANDER_ACTION : 
            return {
                ...action.payload.data,
            }
        case REMOVE_COMMANDER_ACTION :
            return {
                ...action.payload.data,
            }
        case LOGIN_ACTION :
            return {
                cards : action.payload.data.userInfo.cards,
                lands : action.payload.data.userInfo.lands,
                commander : action.payload.data.userInfo.commander,
                message : action.payload.data.userInfo.deck.message
            }
        case LOGOUT_ACTION :
            return {
                ...action.payload.data.userInfo.deck
            }
        default :
            return {
                ...state,
            }
    }
}