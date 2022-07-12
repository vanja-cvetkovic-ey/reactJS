/**             ...
 * If we call spread or rest depends on where we use it:
 - the spread operator is used to split up array elements or object Properties
 const newArr = [...oldArray, 12]
 const newObj = {...oldObj, newProp: 5}
 - the rest operator is the same opatr but used differently, it is used to merge a list of function arguments into an array. We use it in a function argument list:
*    function sortArg(...args) {
*      return args.sort()
*    }
sortArgs receives an unlimited mount of arguments, with rest operator (...) we only write one argument args but we may actually recived more than one and they will be all merged together into an array so then we can apply array method to out argument list or do whatever we want to do with our conveniently store arguments
 */

// spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: "max",
};
const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

//rest
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3, 1));
