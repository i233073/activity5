const { add, subtract, multiply, divide, modulus } = require('./calculator');

test('add: 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract: 5 - 3 = 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiply: 4 * 6 = 24', () => {
  expect(multiply(4, 6)).toBe(24);
});

test('divide: 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('modulus: 10 % 3 = 1', () => {
  expect(modulus(10, 3)).toBe(1);
});

test('divide: division by zero throws error', () => {
  expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});

test('modulus: by zero throws error', () => {
  expect(() => modulus(10, 0)).toThrow('Cannot perform modulus by zero');
});
