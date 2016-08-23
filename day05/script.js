// var fruits = ['apple','banana','cherry','strawberry'];
// fruits.push('kiwi');
// var fruitColors = [];
// var cherry = ['cherry','red'];
// var banana = ['banana','yellow'];
// var kiwi = ['kiwi','green'];
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(kiwi);
// var lastFruit = fruitColors.pop();
// var firstFruit = fruitColors.shift();
// console.log(fruitColors[0][1]);
// console.log(fruitColors[1][1]);
// console.log(fruitColors[2][1]);
// console.log(fruitColors);
// console.log(lastFruit);
// console.log(firstFruit);
// var selectedFruit = fruits.slice(1,3);
// console.log(fruits);
// console.log(selectedFruit);
// fruits.splice(1,2,'grape');
// console.log(fruits);
//
// function removeFruit(){
//   var removedFruit = prompt('Which fruit would you like to remove?');
//   var found;
//   for (i=0;i<fruits.length;i++){
//     if (fruits[i] == removedFruit){
//       fruits.splice(i,1);
//       found = true;
//       i--;
//     }
//   }
//   if (!found){
//     alert('That fruit doesn\'t exist!');
//   }
// }
//
// var fruits = [];
// var confirmation = true;
// while (confirmation){
//   fruits.push(prompt('Please enter a fruit:'));
//   confirmation = confirm('Would you like to enter another fruit?');
// }
// console.log(fruits);
// removeFruit();
// console.log(fruits);

for (i=1;i<11;i++){
  if (i == 6){
    break;
  }
  console.log(i);
}
