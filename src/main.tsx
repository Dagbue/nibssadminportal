import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import './assets/css/App.css'
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./router/router.tsx";
import {NotificationProvider} from "./util/provider/NotificationProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <NotificationProvider/>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
