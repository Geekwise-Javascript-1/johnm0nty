var inc = 0;

function newItem(){
  if(toDo.value.length == 0){
    return;
  }
  var newToDo = document.createElement('p');
  newToDo.textContent = toDo.value;
  if(inc % 2 == 0){
    list1.appendChild(newToDo);
  }else{
    list2.appendChild(newToDo);
  }
  inc++;
}

submitBtn.addEventListener('click',newItem);
