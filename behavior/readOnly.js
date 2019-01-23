'use strict';

// creating an object with read only property
let obj = {};

Object.defineProperty(obj, 'readOnly', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'This variable is read only',
});

// it will throw an error (just because by strict mode)
obj.readOnly = 'foo';
