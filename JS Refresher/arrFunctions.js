const numbers = [1, 2, 3];

/**
Array methods take a function as an input and this function is then simply executed on each element 
so therefore what we get in this arrow function is a number in the end

map() returns a new arr
 */
const doubleNumArr = numbers.map((el) => {
  return el * 2;
});

console.log(numbers);
console.log(doubleNumArr);
