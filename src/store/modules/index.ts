import {combineReducers} from "@reduxjs/toolkit";

import store from "../index.ts";
import {notification} from "./notification.ts";
import {application} from "./application.ts";
import {useDispatch} from "react-redux";



export const rootReducer = combineReducers({
    notification:notification.reducer,
    application:application.reducer,
})
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;// export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();



