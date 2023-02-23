const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

console.log(assertArraysEqual([1,2,3], [3,2,1]));
console.log(assertArraysEqual([1,2,3], [1,2,3]));