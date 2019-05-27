import {combineReducers} from "redux";
import deckReducer from "./deckReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    deck : deckReducer,
});

export default rootReducer;