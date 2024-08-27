import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionType} from "../../util/type/store.ts";
import {CreateApplicationRequest} from "../../model/request/application/CreateApplicationRequest.tsx";
import {ApplicationService} from "../../service/ApplicationService.tsx";
import {BaseResponse} from "../../model/response/BaseResponse.tsx";
import {ReadApplicationResponse} from "../../model/response/application/ReadApplicationResponse.tsx";
import {UpdateApplicationRequest} from "../../model/request/application/UpdateApplicationRequest.tsx";
import {ReadAppByApplicationId} from "../../model/request/application/ReadAppByApplicationId.tsx";
import {ReadByAppIdResponse} from "../../model/response/application/ReadByAppIdResponse.tsx";
import {DeleteAppRequest} from "../../model/request/application/DeleteAppRequest.tsx";

export type ApplicationState = {
    // token: string,
    loading: boolean,
    applications: ReadApplicationResponse,
    application:ReadByAppIdResponse

}

const initialState: ApplicationState = {
    // token: "",
    loading: false,
    applications: {} as ReadApplicationResponse,
    application:{} as ReadByAppIdResponse


}


const action = {
    createApp: createAsyncThunk<BaseResponse, ActionType<CreateApplicationRequest>, { rejectValue: BaseResponse }>
    ("application/createApp", async (payload, thunkAPI) => {
        try {
            const response = await ApplicationService.createApplication(thunkAPI, payload.data);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }),
    readApp: createAsyncThunk<ReadApplicationResponse, ActionType<any>, { rejectValue: ReadApplicationResponse }>
    ("application/readApp", async (_payload, thunkAPI) => {
        try {
            const response = await ApplicationService.readApplication(thunkAPI);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }),
    updateApp: createAsyncThunk<BaseResponse, ActionType<UpdateApplicationRequest>, { rejectValue: BaseResponse }>
    ("application/updateApp", async (payload, thunkAPI) => {
        try {
            const response = await ApplicationService.updateApplication(thunkAPI, payload.data);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }),
    readAppById: createAsyncThunk<ReadByAppIdResponse, ActionType<ReadAppByApplicationId>, {
        rejectValue: ReadByAppIdResponse
    }>
    ("application/readAppById", async (payload, thunkAPI) => {
        try {
            const response = await ApplicationService.readApplicationById(thunkAPI, payload.data);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }),
    deleteApp: createAsyncThunk<BaseResponse, ActionType<DeleteAppRequest>, { rejectValue: BaseResponse }>
    ("application/deleteApp", async (payload, thunkAPI) => {
        try {
            const response = await ApplicationService.deleteApplicationById(thunkAPI, payload.data);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }),
}

const slice =
    createSlice({
    name: "application",
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setApplications(state, {payload}) {
            state.applications = payload;
        },

    },
    extraReducers: (builder)=>{
        builder
            .addCase(action.createApp.pending, (state: ApplicationState)=>{
                state.loading = true
            })
            .addCase(action.createApp.fulfilled, (state: ApplicationState, action)=>{
                const response = action.payload as BaseResponse
                state.loading = false
                // state.token = response.token
                // localStorage.token = response.token
                // state.userInfo = response
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })
            .addCase(action.readApp.pending, (state: ApplicationState)=>{
                state.loading = true
            })
            .addCase(action.readApp.fulfilled, (state: ApplicationState, action)=>{
                const response = action.payload as ReadApplicationResponse
                state.loading = false
                // state.token = response.token
                // localStorage.token = response.token
                state.applications = response
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })
            .addCase(action.updateApp.pending, (state: ApplicationState)=>{
                state.loading = true
            })
            .addCase(action.updateApp.fulfilled, (state: ApplicationState, action)=>{
                const response = action.payload as BaseResponse
                state.loading = false
                // state.token = response.token
                // localStorage.token = response.token
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })
            .addCase(action.readAppById.pending, (state: ApplicationState)=>{
                state.loading = true
            })
            .addCase(action.readAppById.fulfilled, (state: ApplicationState, action)=>{
                const response = action.payload as ReadByAppIdResponse
                state.loading = false
                // state.token = response.token
                state.application = response
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })
            .addCase(action.deleteApp.pending, (state: ApplicationState)=>{
                state.loading = true
            })
            .addCase(action.deleteApp.fulfilled, (state: ApplicationState, action)=>{
                const response = action.payload as BaseResponse
                state.loading = false
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload)
                else {
                    action.meta.arg.onError?.(action.payload)
                }
            })







    }
})

export const application = {
    reducer: slice.reducer,
    action: action,
    mutation: slice.actions,
}

