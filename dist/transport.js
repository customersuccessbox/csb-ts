"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const axios_1 = require("axios");
class Transport {
    constructor(endpoint, apiKey) {
        this.http = axios_1.default.create({
            baseURL: endpoint,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + apiKey,
            },
        });
    }
    post(uri, data) {
        return this.http.post(uri, data);
    }
}
exports.Transport = Transport;
