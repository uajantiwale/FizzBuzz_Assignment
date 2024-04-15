function checkValue(value) {
  if (value === '') {
    return 'Invalid value type';
  } else if (Number(value) % 3 === 0 && Number(value) % 5 === 0) {
    return 'FizzBuzz';
  } else if (Number(value) % 3 === 0) {
    return 'Fizz';
  } else if (Number(value) % 5 === 0) {
    return 'Buzz';
  } else {
    if (isNaN(value)) {
      return 'Invalid value type';
    } else {
      const finalResultForThree = `Divided ${value} by 3,  Divided ${value} by 5`;
      return finalResultForThree;
    }
  }
}

module.exports = { checkValue };
