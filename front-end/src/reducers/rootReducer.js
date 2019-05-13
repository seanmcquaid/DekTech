import {combineReducers} from "redux";
import deckReducer from "./deckReducer";
import authReducer from "./authReducer";
import currentPageReducer from "./currentPageReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    deck : deckReducer,
    currentPage : currentPageReducer,
});

export default rootReducer;