"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var axios_1 = require("axios");
var Transport = /** @class */ (function () {
    function Transport(endpoint, apiKey) {
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
    Transport.prototype.post = function (uri, data) {
        return this.http.post(uri, data);
    };
    return Transport;
}());
exports.Transport = Transport;
