import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AuthService} from "../../service/AuthService";
import {LoginResponse} from "../../model/response/auth/LoginResponse.ts";
import {InitiateLoginRequest} from "../../model/request/auth/InitiateLoginRequest.ts";
import {ActionType} from "../../util/type/store.ts";
import {InitiateLoginResponse} from "../../model/response/auth/InitiateLoginResponse.tsx";
import {CompleteLoginRequest} from "../../model/request/auth/CompleteLoginRequest.tsx";
import {UserDetailsResponse} from "../../model/response/auth/UserDetailsResponse.tsx";
// import {UpdateUserRequest} from "../../model/request/user/UpdateUserRequest.ts";

export type AuthState = {
    token: string,
    loading: boolean,
    userInfo: LoginResponse,
    loginInfo: InitiateLoginResponse,
    userDetails: UserDetailsResponse,


}

const initialState: AuthState = {
    token: "",
    loading: false,
    userInfo: {} as LoginResponse,
    userDetails:{} as UserDetailsResponse,
    loginInfo: {} as InitiateLoginResponse,

}

const action = {

    initiateLogin: createAsyncThunk("auth/initiateLogin",  async (payload:ActionType<InitiateLoginRequest>, thunkAPI)=>{
        return (await AuthService.initiateLogin(thunkAPI,payload.data)).data
    }),
    completeLogin: createAsyncThunk("auth/completeLogin",  async (payload:ActionType<CompleteLoginRequest>, thunkAPI)=>{
        return (await AuthService.completeLogin(thunkAPI,payload.data)).data
    }),
    userDetails: createAsyncThunk("auth/userDetails",  async (_payload:ActionType<any>, thunkAPI)=>{
        return (await AuthService.userDetails(thunkAPI)).data
    }),
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, {payload}){
            state.token = payload
        },
        setLoading(state ,{payload}){
            state.loading = payload
        },
        setUserInfo(state ,{payload}){
            state.userInfo = payload
        },
        setLoginInfo(state ,{payload}){
            state.loginInfo = payload
        },
    },
    extraReducers: (builder)=>{
        builder
            .addCase(action.initiateLogin.pending, (state)=>{
                state.loading = true
            })
            .addCase(action.initiateLogin.fulfilled, (state, action)=>{
                const response = action.payload as InitiateLoginResponse
                state.loading = false
                // state.token = response.token
                // localStorage.token = response.token
                // state.loginInfo = response
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })
            .addCase(action.completeLogin.pending, (state)=>{
                state.loading = true
            })
            .addCase(action.completeLogin.fulfilled, (state, action)=>{
                const response = action.payload as LoginResponse
                state.loading = false
                // state.token = response.token
                localStorage.token = response.token
                localStorage.partnerId = response.userPartnerId
                console.log(response.userPartnerId)
                state.userInfo = response
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })
            .addCase(action.userDetails.pending, (state)=>{
                state.loading = true
            })
            .addCase(action.userDetails.fulfilled, (state, action)=>{
                const response = action.payload as UserDetailsResponse
                state.loading = false
                // state.token = response.token
                state.userDetails = response
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })




    }
})

export const auth = {
    reducer: slice.reducer,
    action: action,
    mutation: slice.actions,
}

