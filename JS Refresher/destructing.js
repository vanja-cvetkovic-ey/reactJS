/*  Destructuring - easily extract array elements or object properties and store them in variables
While Spread operator takes out all elements, all properties and distributes them in a new array or object, Destructuring allows you to po pull out single elements or properties and store them in variables for arrays and objects

ARRAY DESTRUCTURING:
[a, b] = ['Hello', 'Max']
console.log(a)
console.log(b)

OBJECT DESTRUCTURING
{name} = {name: 'Max', age:28}
console.log(name) // Max
console.log(age) // --------> undefiend

*/

//array destructuring
const numbers = [1, 2, 3];
[num1, , num2] = numbers;
console.log(num1, num2); // if you want to get 3 insted of 2, then simply leave out the one space with an empty space declaration on left side

// object destructuring
