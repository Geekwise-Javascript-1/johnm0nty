function inputControl(e){
  if (e.keyCode == 13){
    e.preventDefault();
    submitBtn.click();
  }
  if (e.keyCode == 220 || e.keyCode == 192){
    e.preventDefault();
  }
}
function newItem(){
  toDo.value = toDo.value.trim();
  if(!toDo.value.length > 0){
    dueDate.value = '';
    return;
  }
  if(!checkDate(dueDate.value)){
    alert('Invalid date format!  Please enter dates in the format MM/DD/YY.');
    return;
  }

  var newToDo = document.createElement('p');
  var newDate = document.createElement('p');
  var newLi = document.createElement('li');
  var newEdit = document.createElement('i');
  var newDelete = document.createElement('i');
  var editDate = document.createElement('i');
  var spacer1 = document.createElement('p');
  var spacer2 = document.createElement('p');
  var spacer3 = document.createElement('p');

  newToDo.textContent = toDo.value;
  newToDo.id = 'item'+inc;
  newToDo.style.display = 'inline';
  newToDo.className = 'listItems';

  newDate.textContent = '| Due: '+dueDate.value+' ';
  newDate.id = 'due'+inc;
  newDate.style.display = 'inline';
  newDate.className = 'listDates';

  newEdit.className = 'fa fa-edit';
  newEdit.id = 'edit'+inc;
  newEdit.addEventListener('click',editItem);

  newDelete.className = 'fa fa-remove';
  newDelete.id = 'delete'+inc;
  newDelete.addEventListener('click',deleteItem);

  editDate.className = 'fa fa-edit';
  editDate.id = 'editDate'+inc;
  editDate.addEventListener('click',editTheDate);

  spacer1.textContent = ' ';
  spacer1.style.display = 'inline';
  spacer2.textContent = ' ';
  spacer2.style.display = 'inline';
  spacer3.textContent = ' ';
  spacer3.style.display = 'inline';

  newLi.id = 'li'+inc;

  newLi.appendChild(newEdit);
  newLi.appendChild(spacer1);
  newLi.appendChild(newDelete);
  newLi.appendChild(spacer2);
  newLi.appendChild(newToDo);
  newLi.appendChild(spacer3);
  if(dueDate.value.length > 0){
    newLi.appendChild(newDate);
  }
  newLi.appendChild(editDate);
  list.appendChild(newLi);

  toDo.value = '';
  dueDate.value = '';
  toDo.focus();
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
    itemString += listItems[i].textContent;
    var listDate = document.getElementById('due'+listItems[i].id.substr(4));
    if(listDate){
      itemString += '~'+listDate.textContent.substr(7,8);
    }
    itemString += '|';
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
    var itemDate = listItems[i].split('~');
    toDo.value = itemDate[0];
    if(itemDate[1]){
      dueDate.value = itemDate[1];
    }
    newItem();
  }
  isDue();
}
function exportToTxt(){
  var exportItems = document.getElementsByClassName('listItems');
  if (exportItems.length == 0){
    return;
  }
  var exportText = '';
  for (var i=0;i<exportItems.length;i++){
    exportText += exportItems[i].textContent;
    var exportDate = document.getElementById('due'+exportItems[i].id.substr(4));
    if(exportDate){
      exportText += '~'+exportDate.textContent.substr(7,8);
    }
    exportText += '|';
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
  if(importOptions.style.display == 'block'){
    importOptions.style.display = 'none';
  }else{
    importOptions.style.display = 'block';
  }
}
function importFromTxt(e){
  var f = e.target.files[0];
  if(!f.type.match('text*')){
    alert('Invalid file type!');
  }else if(f){
    var r = new FileReader();
    r.onload = function(e){
      var contents = e.target.result;
      if (document.getElementsByClassName('listItems').length > 0){
        var confirmation = confirm('Warning: this will overwrite your current list! Do you want to continue?');
        if (!confirmation){
          return;
        }
      }
      list.innerHTML = '';
      var listItems = contents.split('|');
      for(var i=0;i<listItems.length-1;i++){
        var itemDate = listItems[i].split('~');
        toDo.value = itemDate[0];
        if(itemDate[1]){
          dueDate.value = itemDate[1];
        }
        newItem();
      }
      isDue();
    }
    r.readAsText(f);
  }
  browseImport.value = '';
  toggleImport();
}
function checkDate(date){
  var isValid = false;
  if(date.match(/[0-1][0-9]\/[0-3][0-9]\/[0-9][0-9]/) || date.length == 0){
    isValid = true;
  }
  return isValid;
}
function editTheDate(){
  var newDate;
  var toEditDate = document.getElementById('due'+this.id.substr(8));
  if(!toEditDate){
    toEditDate = document.createElement('p');
    var parentDiv = document.getElementById('li'+this.id.substr(8));
    var spacer = document.createElement('p');
    toEditDate.id = 'due'+this.id.substr(8);
    toEditDate.style.display = 'inline';
    toEditDate.className = 'listDates';
    spacer.textContent = ' ';
    spacer.style.display = 'inline';
    parentDiv.insertBefore(toEditDate,this);
    parentDiv.insertBefore(spacer,this);
  }
  do{
    newDate = prompt('Please enter the new due date in the form MM/DD/YY. Leave blank to remove the due date, or click Cancel to return without changing the due date.');
    var isValid;
  }while(newDate !== null && !checkDate(newDate));
  if(newDate === null){
    return;
  }else if(newDate.length > 0){
    toEditDate.textContent = '| Due: '+newDate;
    var today = new Date()
    today = new Date(today.getTime()-(today.getTimezoneOffset()*60000));
    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear().toString().substr(2);
    var dateArr = newDate.split('/');
    var item = document.getElementById('item'+toEditDate.id.substr(3));
    if(dateArr[2] < year || (dateArr[2] == year && dateArr[0] < month) || (dateArr[2] == year && dateArr[0] == month && dateArr[1] < day)){
      var item = document.getElementById('item'+toEditDate.id.substr(3));
      toEditDate.style.fontWeight = '900';
      toEditDate.style.color = '#F00';
      item.style.fontWeight = '900';
      item.style.color = '#F00';
    }else if(dateArr[2] == year && dateArr[0] == month && dateArr[1] == day){
      toEditDate.style.fontWeight = '900';
      toEditDate.style.color = '#000';
      item.style.fontWeight = '900';
      item.style.color = '#000';
    }else{
      toEditDate.style.fontWeight = '400';
      toEditDate.style.color = '#000';
      item.style.fontWeight = '400';
      item.style.color = '#000';
    }
  }else{
    var item = document.getElementById('item'+this.id.substr(8));
    item.style.fontWeight = '400';
    item.style.color = '#000';
    this.parentNode.removeChild(toEditDate);
  }
}
function isDue(){
  var dates = document.getElementsByClassName('listDates');
  var today = new Date()
  today = new Date(today.getTime()-(today.getTimezoneOffset()*60000));
  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear().toString().substr(2);
  var dueToday = false;
  var overdue = false;
  for(var i=0;i<dates.length;i++){
    var importDate = dates[i].textContent.substr(7,8).split('/');
    if(importDate[2] < year || (importDate[2] == year && importDate[0] < month) || (importDate[2] == year && importDate[0] == month && importDate[1] < day)){
      var item = document.getElementById('item'+dates[i].id.substr(3));
      dates[i].style.fontWeight = '900';
      dates[i].style.color = '#F00';
      item.style.fontWeight = '900';
      item.style.color = '#F00';
      overdue = true;
    }
    if(importDate[2] == year && importDate[0] == month && importDate[1] == day){
      var item = document.getElementById('item'+dates[i].id.substr(3));
      dates[i].style.fontWeight = '900';
      item.style.fontWeight = '900';
      dueToday = true;
    }
  }
  if(dueToday && overdue){
    alert('You have one or more overdue items, and one or more items due today.')
  }

  if(dueToday && !overdue){
    alert('You have one or more items due today.')
  }
  if(!dueToday && overdue){
    alert('You have one or more overdue items.')
  }
}

var inc = 0;

toDo.addEventListener('keydown',inputControl);
dueDate.addEventListener('keydown',inputControl);
submitBtn.addEventListener('click',newItem);
clearList.addEventListener('click',deleteAll);
saveList.addEventListener('click',saveAll);
loadList.addEventListener('click',loadAll);
exportTxt.addEventListener('click',exportToTxt);
importTxt.addEventListener('click',toggleImport);
browseImport.addEventListener('change',importFromTxt);
