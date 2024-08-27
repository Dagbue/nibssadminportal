import {BaseService} from "./BaseService";
import {InitiateLoginRequest} from "../model/request/auth/InitiateLoginRequest.ts";
import {CompleteLoginRequest} from "../model/request/auth/CompleteLoginRequest.tsx";
import {InitiatePasswordResetRequest} from "../model/request/auth/InitiatePasswordResetRequest.ts";
import {CompletePasswordResetRequest} from "../model/request/auth/CompletePasswordResetRequest.ts";
import {ChangePasswordRequest} from "../model/request/auth/ChangePasswordRequest.ts";

export class AuthService {


    static initiateLogin = (others: any, data: InitiateLoginRequest) =>{
        return BaseService.apiClient(others).post("/authentication/initiate-login",data)
    }
    static completeLogin = (others: any, data: CompleteLoginRequest) =>{
        return BaseService.apiClient(others).post("/authentication/complete-login",data)
    }
    static userDetails = (others: any) =>{
        return BaseService.apiClient(others).get("/authentication/user-details")
    }
    static initiatePasswordRequest = (others: any, data: InitiatePasswordResetRequest) =>{
        return BaseService.apiClient(others).post("/authentication/initiate-password-reset", data)
    }
    static completePasswordRequest = (others: any, data: CompletePasswordResetRequest) =>{
        return BaseService.apiClient(others).post("/authentication/complete-password-reset", data)
    }
    static changePassword = (others: any, data: ChangePasswordRequest) =>{
        return BaseService.apiClient(others).post("/authentication/change-password", data)
    }
}