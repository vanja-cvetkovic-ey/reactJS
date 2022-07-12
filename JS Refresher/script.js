//let and const

let myName = "max";
console.log(myName);

myName = "manu";
console.log(myName);

// arrow function

// regular function: function funName() {}
// arrow function: const funName = () => {}

function printMyname(name) {
  console.log(name);
}

const prtMyName = (name, age) => {
  console.log(name, age);
  return age;
};

const short = (number) => number * 2;

printMyname("max");
prtMyName("max", 28);
