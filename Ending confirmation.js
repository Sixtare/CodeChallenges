function confirmEnding(str, target) {
  
  if(target == str){
    return true;
  } else if(target == str.charAt(str.length - 1)){
      return true;
    } else if(target == str.substring(str.length - target.length)){
        return true;
      } else {
          return false;
        }
  
   
 
}

confirmEnding("I like dance", "ance");