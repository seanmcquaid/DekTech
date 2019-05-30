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
const theStoreWithMiddlewareAndReducers = theStore(reducers);

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch(err){
        console.log(err)
    }
}

ReactDOM.render(
    <Provider store={theStoreWithMiddlewareAndReducers}>
        <App />
    </Provider>, 
    document.getElementById('root')
);