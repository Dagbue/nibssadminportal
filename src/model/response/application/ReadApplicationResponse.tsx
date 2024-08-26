export type ReadApplicationResponse={
    data: [
        {
            applicationCreatedAt: string,
            applicationCreatedBy: number,
            applicationCurrentVersion: string,
            applicationDescription: string,
            applicationDisplayMessage: string,
            applicationId: number,
            applicationName: string,
            applicationPartnerId: number,
            applicationStatus: string,
            applicationUpdatedAt: string,
            applicationUpdatedBy: number
        }
    ],
    responseCode: string,
    responseMessage: string
}