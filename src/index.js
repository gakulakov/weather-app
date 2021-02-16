import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/rootReducer";
import firebase from 'firebase'

const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const firebaseConfig = {
    apiKey: "AIzaSyCTSO65DHWXHPJ02GBWQueiKRmiLrJsdxE",
    authDomain: "weather-app-9ee4f.firebaseapp.com",
    databaseURL: "https://weather-app-9ee4f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "weather-app-9ee4f",
    storageBucket: "weather-app-9ee4f.appspot.com",
    messagingSenderId: "128842807054",
    appId: "1:128842807054:web:e33e297be33928a516495f",
    measurementId: "G-Y5ETZLYFJW"
}

firebase.initializeApp(firebaseConfig)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);
