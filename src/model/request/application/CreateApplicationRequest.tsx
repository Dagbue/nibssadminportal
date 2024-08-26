export type CreateApplicationRequest={
    applicationDescription: string,
    applicationDisplayMessage: string,
    applicationName: string,
    applicationPartnerId: number,
    applicationUssdCode: string
}
export const CreateApplicationRequestInit:CreateApplicationRequest={
    applicationDescription: "",
    applicationDisplayMessage: "",
    applicationName: "",
    applicationPartnerId: 0,
    applicationUssdCode: ""
}