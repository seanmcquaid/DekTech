import {createStore, applyMiddleware} from "redux";
import reducers from "../reducers/rootReducer";
import reduxPromise from "redux-promise";

const middleware = applyMiddleware(reduxPromise);
const theStore = middleware(createStore);

const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem("state");
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err){
        console.log(err);
    }
};

export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch(err){
        console.log(err)
    }
};

const persistedState = loadFromLocalStorage();

export const store = theStore(reducers, persistedState);