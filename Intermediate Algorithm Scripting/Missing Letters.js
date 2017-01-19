function fearNotLetter(str) {
  var starString = str.charCodeAt(0);
  var endString = str.charCodeAt(str.length - 1);
  
  var myString = "";
  
  
  for(var i = starString; i <= endString; i++){
    myString += String.fromCharCode(i);
    if(myString == str){
      return undefined;
    }
  }
    
    
  function filtering(value){
    return this.indexOf(value) < 0;
  }
  
  str = str.split('');
  myString = myString.split('');
  
  var stringFiltered = myString.filter(filtering, str);
  stringFiltered = stringFiltered.join('');
  
  return stringFiltered;
}

fearNotLetter("abce");