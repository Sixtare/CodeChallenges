function repeatStringNumTimes(str, num) {
  // repeat after me
  var myWord = str;
  if(num < 0){
    myWord = "";
    return myWord;
  }
  
  for(var i = 1; i < num; i++){
    myWord += str;    
  }
  str = myWord;
  return str;
}

repeatStringNumTimes("*", 3);
