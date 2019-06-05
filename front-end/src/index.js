import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store, saveToLocalStorage} from "./store/store";
import "./index.css";

store.subscribe( () => saveToLocalStorage(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);