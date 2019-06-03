import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const intitialState = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    intitialState,
    compose(applyMiddleware(...middleWare))
);

export default store;