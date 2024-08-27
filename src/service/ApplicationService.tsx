import {BaseService} from "../service/BaseService.ts";
import {CreateApplicationRequest} from "../model/request/application/CreateApplicationRequest.tsx";
import {UpdateApplicationRequest} from "../model/request/application/UpdateApplicationRequest.tsx";
import {ReadAppByApplicationId} from "../model/request/application/ReadAppByApplicationId.tsx";
import {DeleteAppRequest} from "../model/request/application/DeleteAppRequest.tsx";


export class ApplicationService {
    static createApplication = (others: any, data: CreateApplicationRequest) =>{
        return BaseService.apiClient(others).post("/application/create", data)
    }
    static readApplication = (others: any) =>{
        return BaseService.apiClient(others).get("/application/read")
    }
    static updateApplication = (others: any,data:UpdateApplicationRequest) =>{
        return BaseService.apiClient(others).post("/application/update",data)
    }
    static readApplicationById= (others: any,data:ReadAppByApplicationId) =>{
        return BaseService.apiClient(others).get(`/application/read-by-application-id/${data.applicationId}`)
    }
    static deleteApplicationById= (others: any,data:DeleteAppRequest) =>{
        return BaseService.apiClient(others).post(`/application/read-by-application-id/${data.applicationId}`)
    }

}