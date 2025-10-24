// calculator.test.js
const calc = require('./calculator');

test('add: 2 + 3 = 5', () => {
  expect(calc.add(2, 3)).toBe(5);
});

test('subtract: 5 - 3 = 2', () => {
  expect(calc.subtract(5, 3)).toBe(2);
});

test('multiply: 4 * 6 = 24', () => {
  expect(calc.multiply(4, 6)).toBe(24);
});

test('divide: 10 / 2 = 5', () => {
  expect(calc.divide(10, 2)).toBe(5);
});

test('divide: division by zero throws error', () => {
  expect(() => calc.divide(1, 0)).toThrow('Cannot divide by zero');
});
