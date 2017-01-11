function titleCase(str) {
  var myWords = str.split(' ');
  for(var i = 0; i < myWords.length; i++){
    if (myWords[i] == myWords[i].toLowerCase()){
      myWords[i] = myWords[i].toUpperCase();
    } else if(myWords[i] == myWords[i].toUpperCase()){
      myWords[i] = myWords[i].toLowerCase();
    }
      
  }
 
 return myWords;
}

titleCase("I'm a little tea pot")