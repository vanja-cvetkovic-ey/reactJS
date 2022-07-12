const person = {
  name: "Max",
};
const secondPerson = person;
// the pointer is copied

console.log(secondPerson === person);

// you should do this becouse the source is the same,
// there are better techniques to copy this in an immutable way ----> copy that by really copyng the object and not just a pointer for that we can use this spread operator

// now we can create a new object and spread the person properies
const newPerson = {
  ...person,
};
newPerson.name = "vanja";
console.log(newPerson);
