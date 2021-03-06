// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj, value) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  value = value || {};
  return Object.keys(obj).every((item) => {
    if (obj[item] && typeof obj[item] === 'object') {
      return checkMatchingLeaves(obj[item], value);
    }
    if (!('value' in value)) {
      value.value = obj[item];
      return true;
    }
    return obj[item] === value.value;
  });
};

/* eslint-enable no-unused-vars */
module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
