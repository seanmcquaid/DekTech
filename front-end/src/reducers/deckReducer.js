import {
    GET_DECK_ACTION,
    ADD_TO_DECK_ACTION,
    REMOVE_FROM_DECK_ACTION,
    CLEAR_DECK_ACTION,
} from "../actions/deckActions/deckActionTypes";

const initialState = {
    deck : [],
    message : "",
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DECK_ACTION :
            return {
                ...action.payload.data
            }
        case ADD_TO_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        case REMOVE_FROM_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        case CLEAR_DECK_ACTION :
            return {
                ...action.payload.data,
            }
        default :
            return {
                ...state,
            }
    }
}