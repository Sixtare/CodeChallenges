function spinalCase(str) {
 
  var counter = str.length;
  for(var i = 0; i < counter; i++){
    if(str.charAt(i) == str.charAt(i).toUpperCase() && str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      console.log("Upper case match");
      if(str.charCodeAt(i-1) != 32 && i !== 0){
       console.log("No space match");
       var singleChar = str.charAt(i);
       var minusOneValue = i;
       console.log(minusOneValue);
       str = str.replace(str.charAt(minusOneValue), ' '+singleChar);
      }
    }
  }
  
  str = str.replace(/\W/g, '-');
  str = str.replace(/_/g, '');
  str = str.toLowerCase();
  return str;
}

spinalCase("The_Andy_Griffith_Show");