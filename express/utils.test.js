require('mocha');
const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  let result = utils.add(33, 11);
  expect(result).toBe(44);
  expect(result).toBeA('number');
});

it('should work as an async function', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
});