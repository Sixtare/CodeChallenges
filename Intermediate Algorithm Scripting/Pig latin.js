function translatePigLatin(str) {
  var vowals = 'aeiou';
  var consonants = 'bcdfghjklmnpqrstvwwxyz';
 
  
    if(vowals.indexOf(str.charAt(0)) != -1){
      str = str.split('');
      str.push('way');
      str = str.join('');
      return str;
      
    } else if(consonants.indexOf(str.charAt(0)) != -1){
        if(consonants.indexOf(str.charAt(1)) != -1){
         
          var twoLetters = str.slice(0, 2);
          str = str.split('');
          str.splice(0, 2);
          str.push(twoLetters+'ay');
          str = str.join('');
          
          return str;
          
        }
          str = str.split('');
          var firstLetter = str.splice(0, 1);
          str.push(firstLetter+'ay');
          str = str.join('');
          return str;
      
      }
      
   
  return str;
}

translatePigLatin("shoot");