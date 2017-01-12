function truncateString(str, num) {
  // Clear out that junk in your trunk
  var myWord = str;
  var charCount = myWord.length;
  if(charCount > num && num > 3){
    myWord = myWord.slice(0, num - 3)+"...";
    
  } else if(charCount > num && num < 3){
      myWord = myWord.slice(0, num)+"...";    
    }
  return myWord;
}

truncateString("Absolutely Longer", 2);