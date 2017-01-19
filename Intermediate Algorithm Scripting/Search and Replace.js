function myReplace(str, before, after) {
  
if(before.charAt(0) == before.charAt(0).toUpperCase()){
    var firstUpper = after.charAt(0);
    firstUpper = firstUpper.toUpperCase();
    after = after.split('');
    after.shift();
    after.unshift(firstUpper);
    after = after.join('');    
  }
  
  str = str.split(' ');
  str.splice(str.indexOf(before), 1, after);
  str = str.join(' ');
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");