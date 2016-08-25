// var input1 = document.getElementById('input1');
// var inputs = document.getElementsByClassName('input');
// var inputsTag = document.getElementsByTagName('input');
// var btnEl = document.querySelector('button[type="button"]');
// var btnEls = document.querySelectorAll('label input');
// var btn = document.getElementById('btn');
//
// function btnclick(){
//   for(var i=0;i<inputs.length;i++){
//     console.log(inputs[i].value);
//   }
// }
//
// btn.onclick = btnclick;

// var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];
// console.log(form.elements)
//
// function getVals(e){
//   // alert('test');
//   e.preventDefault();
//   // console.log(form.elements);
//   for(var i=0;i<form.elements.length-1;i++){
//     console.log(form.elements[i].value);
//   }
// }
//
// submitBtn.onclick = getVals;

// ---------------------------------------------------------------------------

// var lis = document.getElementsByTagName('li');
// for(var i=0;i<lis.length;i++){
//   lis[i].addEventListener('click',function(e){
//     console.log(this.textContent);
//     console.log(e.target);
//   });
// }
//
// // function logName(name){
// //   console.log(name);
// // }
//
// var foo = function(name){
//   console.log(name);
// }
//
// foo('John');

var inputEl = [];
var inc = 0;

function addMore(){
  inputEl.push(document.createElement('input'));
  inputEl[inc].id = 'newId'+inc;
  inputEl[inc].name = 'new';
  inputEl[inc].type = 'email';
  inputEl[inc].placeholder = 'placeholder';
  form.appendChild(inputEl[inc]);
  inc++;
}
btn.onclick = addMore;
