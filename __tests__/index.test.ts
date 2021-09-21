import { CSB } from '../src';
import { isEmpty } from 'lodash';

let CSBInstance: CSB;
let isInstanceEnabled = false;
beforeAll(() => {
  const endpoint = process.env.ENDPOINT || '';
  const apiKey = process.env.API_KEY || '';
  if (!isEmpty(endpoint) && !isEmpty(apiKey)) {
    CSBInstance = new CSB(endpoint, apiKey);
    isInstanceEnabled = true;
  }
});

test('Login Functionality', () => {
  if (isInstanceEnabled) {
    return CSBInstance.login('123', 456).then((response) => {
      expect(response.data).toEqual(
        expect.objectContaining({
          success: expect.any(Boolean),
        }),
      );
    });
  } else {
    throw new Error('CSB Instance Not Available');
  }
});

test('Logout Functionality', () => {
  if (isInstanceEnabled) {
    return CSBInstance.logout('123', 456).then((response) => {
      expect(response.data).toEqual(
        expect.objectContaining({
          success: expect.any(Boolean),
        }),
      );
    });
  } else {
    throw new Error('CSB Instance Not Available');
  }
});

test('Account Traits', () => {
  if (isInstanceEnabled) {
    return CSBInstance.account('123', { option1: 'value1' }).then(
      (response) => {
        expect(response.data).toEqual(
          expect.objectContaining({
            success: expect.any(Boolean),
          }),
        );
      },
    );
  } else {
    throw new Error('CSB Instance Not Available');
  }
});

test('User Traits', () => {
  if (isInstanceEnabled) {
    return CSBInstance.user('123', 456, { option1: 'value2' }).then(
      (response) => {
        expect(response.data).toEqual(
          expect.objectContaining({
            success: expect.any(Boolean),
          }),
        );
      },
    );
  } else {
    throw new Error('CSB Instance Not Available');
  }
});

test('Subscription Params', () => {
  if (isInstanceEnabled) {
    return CSBInstance.subscription('123', 456, { option1: 'value2' }).then(
      (response) => {
        expect(response.data).toEqual(
          expect.objectContaining({
            success: expect.any(Boolean),
          }),
        );
      },
    );
  } else {
    throw new Error('CSB Instance Not Available');
  }
});

test('Invoice with Account Params', () => {
  if (isInstanceEnabled) {
    return CSBInstance.invoice('123', null, 456, { option1: 'value2' }).then(
      (response) => {
        expect(response.data).toEqual(
          expect.objectContaining({
            success: expect.any(Boolean),
          }),
        );
      },
    );
  } else {
    throw new Error('CSB Instance Not Available');
  }
});

test('Invoice with Subscription Params', () => {
  if (isInstanceEnabled) {
    return CSBInstance.invoice(null, 456, '789', { option1: 'value2' }).then(
      (response) => {
        expect(response.data).toEqual(
          expect.objectContaining({
            success: expect.any(Boolean),
          }),
        );
      },
    );
  } else {
    throw new Error('CSB Instance Not Available');
  }
});

test('Feature Traits', () => {
  if (isInstanceEnabled) {
    return CSBInstance.feature(
      '123',
      '456',
      'Product 1',
      'Module 1',
      'Feature 1',
      10,
    ).then((response) => {
      expect(response.data).toEqual(
        expect.objectContaining({
          success: expect.any(Boolean),
        }),
      );
    });
  } else {
    throw new Error('CSB Instance Not Available');
  }
});
