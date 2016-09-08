// var car = {
//   make:'Ford',
//   model:'Taurus',
//   year:2000
// };

// var person = new Object();
// person.firstName = 'John';
// person.age = 25;
// person.job = 'Student';
// person.sayName = function(){
//   alert(this.firstName);
// };

// var person = {
//   firstName:'John',
//   age:25,
//   job:'Student',
//   sayName:function(){
//     alert(this.firstName);
//   }
// };
//
// person.sayName();

function Person(firstName,age,job){
  this.firstName = firstName;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    alert(this.firstName);
  };
}

// var person1 = new Person('John',25,'Student');
// var person2 = new Person('Matt',26,'Developer');
//
// console.log(person1.age);
// person2.sayName();

function Login(user){
  this.user = user;
  this.build = build;
}

function build(){
    var h2 = document.createElement('h2'),
      form = document.createElement('form'),
      label = document.createElement('label'),
      input = document.createElement('input'),
      submit = document.createElement('input');

    h2.textContent = 'Welcome, '+this.user+'!';
    label.setAttribute('for','user'+inc);
    label.textContent = 'Username: ';
    input.type = 'text';
    input.id = 'user'+inc;
    input.placeholder = 'username';
    submit.type = 'submit';
    submit.value = 'Submit';

    login.appendChild(h2);
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(submit);
    login.appendChild(form);
    inc++;
}

var inc = 0;
var login1 = new Login('John');
var login2 = new Login('Matt');

login1.build();
login2.build();
