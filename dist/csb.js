"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSB = void 0;
var transport_1 = require("./transport");
var CSB = /** @class */ (function () {
    function CSB(endpoint, apiKey) {
        this.transport = new transport_1.Transport(endpoint, apiKey);
    }
    CSB.prototype.isEmpty = function (value) {
        return (value === undefined ||
            value === null ||
            (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0));
    };
    CSB.prototype.login = function (accountId, userId) {
        var data = {
            account_id: accountId,
            user_id: userId,
            type: 'track',
            event: 'User Login',
            timestamp: new Date().toISOString(),
        };
        return this.transport.post('/api/v1_1/login', data);
    };
    CSB.prototype.logout = function (accountId, userId) {
        var data = {
            account_id: accountId,
            user_id: userId,
            type: 'track',
            event: 'User Logout',
            timestamp: new Date().toISOString(),
        };
        return this.transport.post('/api/v1_1/logout', data);
    };
    CSB.prototype.account = function (accountId, properties) {
        properties = properties || {};
        if (this.isEmpty(accountId)) {
            throw new Error('Invalid Account ID');
        }
        properties.account_id = accountId;
        return this.transport.post('/api/v1_1/account', properties);
    };
    CSB.prototype.user = function (accountId, userId, properties) {
        properties = properties || {};
        if (this.isEmpty(accountId)) {
            throw new Error('Invalid Account ID');
        }
        if (this.isEmpty(userId)) {
            throw new Error('Invalid User ID');
        }
        properties.account_id = accountId;
        properties.user_id = userId;
        return this.transport.post('/api/v1_1/user', properties);
    };
    CSB.prototype.subscription = function (accountId, subscriptionId, properties) {
        properties = properties || {};
        if (this.isEmpty(accountId)) {
            throw new Error('Invalid Account ID');
        }
        if (this.isEmpty(subscriptionId)) {
            throw new Error('Invalid Subscription ID');
        }
        properties.account_id = accountId;
        properties.subscription_id = subscriptionId;
        return this.transport.post('/api/v1_1/subscription', properties);
    };
    CSB.prototype.invoice = function (accountId, subscriptionId, invoiceId, properties) {
        properties = properties || {};
        if (this.isEmpty(accountId)) {
            if (this.isEmpty(subscriptionId)) {
                throw new Error('Please Provide Subscription ID or Account ID');
            }
        }
        if (this.isEmpty(invoiceId)) {
            throw new Error('Invalid Invoice ID');
        }
        if (!this.isEmpty(accountId)) {
            properties.account_id = accountId;
        }
        if (!this.isEmpty(subscriptionId)) {
            properties.subscription_id = subscriptionId;
        }
        properties.invoice_id = invoiceId;
        return this.transport.post('/api/v1_1/invoice', properties);
    };
    CSB.prototype.feature = function (accountId, userId, productId, moduleId, featureId, total) {
        total = total || 1;
        if (this.isEmpty(accountId)) {
            throw new Error('Invalid Account ID');
        }
        if (this.isEmpty(userId)) {
            throw new Error('Invalid User ID');
        }
        if (this.isEmpty(productId)) {
            throw new Error('Invalid Product ID');
        }
        if (this.isEmpty(moduleId)) {
            throw new Error('Invalid Module ID');
        }
        if (this.isEmpty(featureId)) {
            throw new Error('Invalid Feature ID');
        }
        var data = {
            account_id: accountId,
            user_id: userId,
            product_id: productId,
            module_id: moduleId,
            feature_id: featureId,
            total: total,
            type: 'feature',
            timestamp: new Date().toISOString(),
        };
        return this.transport.post('/api/v1_1/feature', data);
    };
    return CSB;
}());
exports.CSB = CSB;
