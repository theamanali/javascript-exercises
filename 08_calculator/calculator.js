const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numsArray) {
    const convertedNumsArray = numsArray.map(num => Number(num));
	return convertedNumsArray.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numsArray) {
  const convertedNumsArray = numsArray.map(num => Number(num));
  return convertedNumsArray.reduce((sum, num) => sum * num, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let factorial = 1;

  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

