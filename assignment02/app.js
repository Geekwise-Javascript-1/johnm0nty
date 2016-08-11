// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// console.log(firstName);
// alert(lastName);
// var didConfirm = confirm('Are you sure?');
// if (didConfirm) {
//   alert('You confirmed!');
// }
// else {
//   alert('You canceled!');
// }

// var constant = 9007199254740991;
// var userResp = prompt('Choose a number:');
// if (isNaN(userResp)) {
//   console.log('not a number');
// }
// else {
//   console.log('is a number');
// }

var userAge = prompt('What is your age?');
var userMale = confirm('Are you male?')
if (parseFloat(userAge) != userAge) {
  alert('Don\'t be sneaky.');
}
else {
  if (userAge >= 21 && userMale) {
    alert('You can drink, dude!');
  }
  else if (userAge >= 21 && !userMale) {
    alert('You can drink, dudette!');
  }
  else {
    alert('Go home!');
  }
}
