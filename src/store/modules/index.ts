import {combineReducers} from "@reduxjs/toolkit";

import store from "../index.ts";
import {notification} from "./notification.ts";



export const rootReducer = combineReducers({
    notification:notification.reducer
})
export type AppDispatch = typeof store.dispatch;


