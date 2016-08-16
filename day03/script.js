// var randNum = Math.round(Math.random()*9+1);
// console.log(randNum);

// var locale = 'en-us';
// var toDay = new Date;
// console.log(toDay);
// console.log(toDay.toLocaleString(locale,{month:"long"})+' '+toDay.getDate()+', '+toDay.getFullYear());

// var locale = 'en-us';
// var name = 'John';
// function newFunction(toDay){
//   alert(name+', today is '+toDay.toLocaleString(locale,{month:"long"})+' '+toDay.getDate()+', '+toDay.getFullYear()+'!');
// }
// newFunction(new Date);

var name = prompt('Enter your name:');
var nameArray = name.split(' ');
var userBirthday = prompt('Enter your full birthday:');
userBirthday = userBirthday.replace(',','');
var userColor = prompt('What is your favorite color?');
function newFunction(firstName,lastName,color){
  console.log(firstName+' '+lastName+', your birthday is '+userBirthday.split(' ')+' and your favorite color is '+color+'.');
}
newFunction(nameArray[0],nameArray[1],userColor);
