const { checkValue } = require('./checkValues');

test('Test result for non divisible numbers', () => {
  value = 1;
  expectedOutput = 'Divided 1 by 3,  Divided 1 by 5';
  expect(checkValue(value)).toEqual(expectedOutput);
});

test('Test result for number divisible by 3', () => {
  value = 3;
  expectedOutput = 'Fizz';
  expect(checkValue(value)).toEqual(expectedOutput);
});

test('Test result for number divisible by 5', () => {
  value = 5;
  expectedOutput = 'Buzz';
  expect(checkValue(value)).toEqual(expectedOutput);
});

test('Test result for number divisible by 3 and 5', () => {
  value = 15;
  expectedOutput = 'FizzBuzz';
  expect(checkValue(value)).toEqual(expectedOutput);
});

test('Test result for input not a number', () => {
  value = 'A';
  expectedOutput = 'Invalid value type';
  expect(checkValue(value)).toEqual(expectedOutput);
});
