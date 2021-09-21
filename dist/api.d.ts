import { Transport } from "./transport";
export declare class API {
    transport: Transport;
    constructor(endpoint: string, apiKey: string);
    isEmpty(value: any): boolean;
    login(accountId: string, userId: string): Promise<import("axios").AxiosResponse<any>>;
    logout(accountId: string, userId: string): Promise<import("axios").AxiosResponse<any>>;
    account(accountId: string, properties: any): Promise<import("axios").AxiosResponse<any>>;
    user(accountId: string, userId: string, properties: any): Promise<import("axios").AxiosResponse<any>>;
    subscription(accountId: string, subscriptionId: string, properties: any): Promise<import("axios").AxiosResponse<any>>;
    invoice(accountId: string, subscriptionId: string, invoiceId: string, properties: any): Promise<import("axios").AxiosResponse<any>>;
    feature(accountId: string, userId: string, productId: string, moduleId: string, featureId: string, total: number): Promise<import("axios").AxiosResponse<any>>;
}
