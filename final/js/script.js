// http://www.htmlgoodies.com/beyond/javascript/read-text-files-using-the-javascript-filereader.html#fbid=D_BcEFXdZJ5

function newItem(){
  toDo.value = toDo.value.trim();
  if(!toDo.value.length > 0){
    return;
  }
  var newToDo = document.createElement('p');
  var newLi = document.createElement('li');
  var newEdit = document.createElement('i');
  var newDelete = document.createElement('i');
  var spacer1 = document.createElement('p');
  var spacer2 = document.createElement('p');

  newToDo.textContent = toDo.value;
  newToDo.id = 'item'+inc;
  newToDo.style.display = 'inline';
  newToDo.className = 'listItems';

  newEdit.className = 'fa fa-edit';
  newEdit.id = 'edit'+inc;
  newEdit.addEventListener('click',editItem);

  newDelete.className = 'fa fa-remove';
  newDelete.id = 'delete'+inc;
  newDelete.addEventListener('click',deleteItem);

  spacer1.textContent = ' ';
  spacer1.style.display = 'inline';
  spacer2.textContent = ' ';
  spacer2.style.display = 'inline';

  newLi.id = 'li'+inc;

  newLi.appendChild(newEdit);
  newLi.appendChild(spacer1);
  newLi.appendChild(newDelete);
  newLi.appendChild(spacer2);
  newLi.appendChild(newToDo);
  list.appendChild(newLi);

  toDo.value = '';
  inc++;
}
function editItem(){
  var toEdit = document.getElementById('item'+this.id.substr(4));
  var updatePrompt = prompt('Please enter the new item:');
  updatePrompt = updatePrompt.trim();
  if (updatePrompt.length > 0){
    toEdit.textContent = updatePrompt;
  }
}
function deleteItem(){
  var toDelete = document.getElementById('li'+this.id.substr(6));
  toDelete.parentNode.removeChild(toDelete);
}
function deleteAll(){
  var confirmation = confirm('Are you sure you want to clear the list?');
  if (confirmation){
    list.innerHTML = '';
  }
}
function saveAll(){
  if(!navigator.cookieEnabled){
    alert('You must have cookies enabled to use this feature!');
    return;
  }
  var listItems = document.getElementsByClassName('listItems');
  if(listItems.length == 0){
    return;
  }
  var itemString = '';
  for(var i=0;i<listItems.length;i++){
    itemString += listItems[i].textContent+'|';
  }
  document.cookie = itemString+';expires=Tue, 19 Jan 2038 03:14:07 UTC';
  alert('Your list has been saved!');
}
function loadAll(){
  if(!navigator.cookieEnabled){
    alert('You must have cookies enabled to use this feature!');
    return;
  }
  if (document.getElementsByClassName('listItems').length > 0){
    var confirmation = confirm('Warning: this will overwrite your current list! Do you want to continue?');
    if (!confirmation){
      return;
    }
  }
  list.innerHTML = '';
  var listItems = document.cookie.split('|');
  for(var i=0;i<listItems.length-1;i++){
    toDo.value = listItems[i];
    newItem();
  }
}
function exportToTxt(){
  var exportItems = document.getElementsByClassName('listItems');
  if (exportItems.length == 0){
    return;
  }
  var exportText = '';
  for (var i=0;i<exportItems.length;i++){
    exportText += exportItems[i].textContent+'|';
  }
  var uri = 'data:application/octet-stream,'+encodeURIComponent(exportText);

  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = uri;
  a.target = '_blank';
  a.download = 'To-Do List.txt';
  document.body.appendChild(a);
  a.click();
}
function toggleImport(){
  if(importOptions.style.display.trim() != 'none'){
    importOptions.style.display = 'none';
  }else{
    importOptions.style.display = 'block';
  }
}

var inc = 0;
importOptions.style.display = 'none';

toDo.addEventListener('keydown',function(e){
  if (e.keyCode == 13){
    e.preventDefault();
    submitBtn.click();
  }
  if (e.keyCode == 220){
    e.preventDefault();
  }
});
submitBtn.addEventListener('click',newItem);
clearList.addEventListener('click',deleteAll);
saveList.addEventListener('click',saveAll);
loadList.addEventListener('click',loadAll);
exportTxt.addEventListener('click',exportToTxt);
importTxt.addEventListener('click',toggleImport);
