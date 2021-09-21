import axios, { AxiosInstance } from 'axios';

export class Transport {
  http: AxiosInstance;

  constructor(endpoint: string, apiKey: string) {
    this.http = axios.create({
      baseURL: endpoint,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + apiKey,
      },
    });
  }

  post(uri: string, data: any) {
    return this.http.post(uri, data);
  }
}
