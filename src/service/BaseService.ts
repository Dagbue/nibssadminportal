import axios from "axios";
import {appConfig} from "../appConfig.ts";

const ApiClient = (others:any) => {
    console.log(others.getState().auth.token)
    const token = localStorage.token

    //axiosInstance
    const axiosInstance = axios.create({
        // baseURL: import.meta.env.VITE_API_BASE_URL,
        baseURL: appConfig.baseURL,
        withCredentials: false,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })

    //interceptors request
    axiosInstance.interceptors.request.use(function (config) {
        config.headers.Authorization =  `${token}`
        return config;
    }, function (error) {
        console.log("Request Error ===> ",error.message)
        return Promise.reject(error);
    });

    //interceptors response
    axiosInstance.interceptors.response.use((response)=>{
        return response
    },(error)=>{
        console.log("Response Error ===> ",error.message)
        return Promise.reject(error)
    })
    return axiosInstance
}


export const BaseService = {
    apiClient:ApiClient,
}