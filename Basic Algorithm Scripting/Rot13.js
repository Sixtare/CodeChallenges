function rot13(str) { // LBH QVQ VG!
  var codeStorage = [];
  for(var i = 0; i < str.length; i++){
    codeStorage[i] = str.charCodeAt(i);
    if(codeStorage[i] <= 77 && codeStorage[i] >= 65 && codeStorage[i] != 32){
      codeStorage[i] += 13;
    } else if(codeStorage[i] > 77 && codeStorage[i] <= 90 && codeStorage[i] != 32){
      codeStorage[i] -= 13;
    }
  } //For loop ends
  
  return String.fromCharCode.apply(null, codeStorage);
  
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");