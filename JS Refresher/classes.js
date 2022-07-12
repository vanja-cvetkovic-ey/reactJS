/*
class Person {
    name = 'Max'
    call = () => {}
}

const myPerson = new Person()
myPerson.call()

* classes also support inheretence
class Person extends Master
*/

class Humann {
  constructor() {
    this.gender = "male";
  }
  printeGender() {
    console.log(this.gender);
  }
}

class Person extends Humann {
  constructor() {
    super();
    this.name = "Max";
    this.gender = "female";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printeGender();
