import {combineReducers} from "redux";
import authReducer from "./authReducer";
import deckReducer from "./deckReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    deck : deckReducer,
});

export default rootReducer;