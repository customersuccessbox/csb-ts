import { Transport } from './transport';
export declare class CSB {
    transport: Transport;
    constructor(endpoint: string, apiKey: string);
    isEmpty(value: any): boolean;
    login(accountId: any, userId: any): Promise<import("axios").AxiosResponse<any>>;
    logout(accountId: any, userId: any): Promise<import("axios").AxiosResponse<any>>;
    account(accountId: any, properties: any): Promise<import("axios").AxiosResponse<any>>;
    user(accountId: any, userId: any, properties: any): Promise<import("axios").AxiosResponse<any>>;
    subscription(accountId: any, subscriptionId: any, properties: any): Promise<import("axios").AxiosResponse<any>>;
    invoice(accountId: any, subscriptionId: any, invoiceId: any, properties: any): Promise<import("axios").AxiosResponse<any>>;
    feature(accountId: any, userId: any, productId: any, moduleId: any, featureId: any, total: number): Promise<import("axios").AxiosResponse<any>>;
}
