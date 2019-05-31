import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/rootReducer";
import reduxPromise from "redux-promise";
import "./index.css";

const middleware = applyMiddleware(reduxPromise);
const theStore = middleware(createStore);

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch(err){
        console.log(err)
    }
};

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

const persistedState = loadFromLocalStorage();

const theStoreWithMiddlewareAndReducers = theStore(reducers, persistedState);

theStoreWithMiddlewareAndReducers.subscribe( () => saveToLocalStorage(theStoreWithMiddlewareAndReducers.getState())) 

ReactDOM.render(
    <Provider store={theStoreWithMiddlewareAndReducers}>
        <App />
    </Provider>, 
    document.getElementById('root')
);