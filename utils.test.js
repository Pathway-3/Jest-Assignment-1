"use strict";

const { multiply, divide, primeNumbers } = require("./utils");

describe("multiply, (a, b) => a * b", () => {
  test("Should be able to multiply two numbers", () => {
    expect(multiply(4, 2)).toBe(8);
  });
  test("Should be able to multiply zero and a number", () => {
    expect(multiply(0, 2)).toBe(0);
  });
  test("Should be able to multiply a number and negative number", () => {
    expect(multiply(4, -2)).toBe(-8);
  });
});

// tests for divide function
describe("divide", () => {
  test("Should be able to divide two numbers", () => {
    expect(divide(4, 2)).toBe(2);
  });
  test("Should be able to divide zero and a number", () => {
    expect(divide(0, 2)).toBe(0);
  });
  test("Should throw an error when dividing by a negative number", () => {
    expect(divide(4, -2)).toThrow();
  });
});

describe("prime numbers", () => {
  test("should return true for 2", () => {
    expect(primeNumbers(2)).toBe(true);
  });
  test("should return false for 1", () => {
    expect(primeNumbers(1)).toBe(false);
  });
  test("should return false for 3", () => {
    expect(primeNumbers(3)).toBe(false);
  });
  test("should return true for a large number", () => {
    expect(primeNumbers(100)).toBe(true);
  });
});
