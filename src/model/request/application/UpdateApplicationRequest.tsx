export type UpdateApplicationRequest={
    applicationCreatedBy: number,
    applicationCurrentVersion: string,
    applicationDescription: string,
    applicationDisplayMessage: string,
    applicationId: number,
    applicationName: string,
    applicationPartnerId: number,
    applicationStatus: string,
    applicationUpdatedBy: number
}
export const UpdateApplicationRequestInit: UpdateApplicationRequest={
    applicationCreatedBy: 0,
    applicationCurrentVersion: "",
    applicationDescription: "",
    applicationDisplayMessage: "",
    applicationId: 0,
    applicationName: "",
    applicationPartnerId: 0,
    applicationStatus: "",
    applicationUpdatedBy: 0
}
