
function palindrome(str) {
  var noChange = str.toLowerCase();
  noChange = noChange.replace(/([^a-z0-9]*)(\s*)/g, "");  // o ^ antes dos numeros significa que nao sejam de A até Z e de 0-9 devem ser replaceds//
 
  var myWord = noChange.split("");
  var wordReverse = myWord.reverse();
  var wordReverseString = wordReverse.join("");
  
  if(wordReverseString == noChange){
    return true;
  } else{
      return false;
    }
  
 
}



palindrome("eye");
