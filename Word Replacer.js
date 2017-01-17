var multWords = ["Bobo", "Bonito", "Cabeçudo", "Inteligente", "Sapiente", "Maroto"];
function completion(myWord, wordArray){
  myWord = myWord.split(' ');
  for(var i = 0; i < myWord.length; i++){
     myWord[i] = myWord[i].replace(/\.../g, wordArray[Math.floor(Math.random()* wordArray.length ) + 0]);
  }
  myWord = myWord.join(' ');
  return myWord;
}


completion("... is ...", multWords);