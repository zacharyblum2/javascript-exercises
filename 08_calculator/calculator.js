const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	let sum = 0; 

  for (let i = 0; i < array.length; i++) {
    sum+= array[i];
  }

  return sum;
};

const multiply = function(array) {
  if (array.length == 0)
    return 0; 

  let sum = 1; 

  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }

  return sum;
};

const power = function(base, power) {
  if (power == 0)
    return 1; 

	let retval = base; 

  for (let i = 0; i < power - 1; i++) {
    retval *= base; 
  }

  return retval;
};

const factorial = function(n) {
  let retval = 1; 

	for (let i = n; i > 0; i--)
    retval *= i;

  return retval;
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
