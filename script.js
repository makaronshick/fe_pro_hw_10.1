"use strict";
/* 
Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
Створіть метод об'єкту для отримання та відображення цих даних.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const user = {
  name: "John",
  age: 35,
  address: "221B Baker Street London",
  getUserInfo: function () {
    return `User info: name - ${this.name}, age - ${this.age}, address - ${this.address}`
  }
};

console.log(user.getUserInfo());
