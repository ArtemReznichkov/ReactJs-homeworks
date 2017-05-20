// Задача 2

// Создайте класс User, который наследует от класса Person (из предыдущей задачи), 
// со свойствами signUpDate(дата регистрации, по умолчанию 0) и id. Создайте несколько 
// экземпляров класса и запишите их в массив users.

'use strict';

let Person = class {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }


  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(){
    return `Hello, my name is ${this.fullName()}`;
  }
 

};

class User extends Person {
    
  constructor({firstName="John", lastName="Doe", age=0, gender="Male", signUpDate=0, id}) {
      
    super(firstName, lastName, age, gender);
    this.signUpDate = signUpDate;
    this.id = id;
  }
}

