function truthCheck(collection, pre) {
  // Is everyone being true?
  var matchCheck = Boolean();
  for(var x in collection){
   if(collection[x].hasOwnProperty(pre)){
    
     if(!collection[x][pre]){
      
       matchCheck = false;
       return matchCheck;
      } else{
          
          matchCheck = true;
        }
    } else{
        
        matchCheck = false;
        return matchCheck;
        
      }
    
  }
  return matchCheck;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
{"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"}], "sex");