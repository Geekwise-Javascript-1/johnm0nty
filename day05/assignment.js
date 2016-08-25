function btnClick(){
  input1.value = 'Hello JavaScript!';
  alert(input1.value);
  textdiv.textContent = input2.value;
}

var btn = document.getElementById('btn');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var textdiv = document.getElementById('textdiv');

btn.onclick = btnClick;
