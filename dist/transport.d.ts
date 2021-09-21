import { AxiosInstance } from 'axios';
export declare class Transport {
    http: AxiosInstance;
    constructor(endpoint: string, apiKey: string);
    post(uri: string, data: any): Promise<import("axios").AxiosResponse<any>>;
}
