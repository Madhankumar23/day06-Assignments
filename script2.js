//Question 3
class Person {
    constructor(firstName, lastName, age, gender, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender=gender;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    isAdult() {
      return this.age >= 18;
    }

    static getFemale(personArray){
        return personArray.filter(person=>person.gender=="Female");
    }
  }
  
  const person1 = new Person("Madhankumar", "S", 23,"Male", "madhankumar.s@gmail.com");
  const person2 = new Person("Angel", "M", 17,"Female", "angel.m@gmail.com");

  const personArray=[
    new Person("Madhankumar", "S", 23,"Male", "madhankumar.s@gmail.com"),
    new Person("Angel", "M", 17,"Female", "angel.m@gmail.com")
  ];


  
  console.log(person1.getFullName()); // Output: Madhankumar S
  console.log(person1.isAdult()); // Output: true
  
  console.log(person2.getFullName()); // Output: Angel M
  console.log(person2.isAdult()); // Output: false

  console.log(Person.getFemale(personArray)); //return a person object
  