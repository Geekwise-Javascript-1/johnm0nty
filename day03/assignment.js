function titleCase(word){
  var newWord = (word.charAt(0)).toUpperCase();
  for (i=1; i < word.length; i++){
    newWord = newWord + (word.charAt(i)).toLowerCase();
  }
  return newWord;
}

var name = prompt('Enter your name:');
name = titleCase(name);
console.log(name);
