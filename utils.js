"use strict";

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function primeNumbers(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = { primeNumbers, multiply, divide };
// Example usage:

// var assert = require('assert');
// console.log("Testing the solution
