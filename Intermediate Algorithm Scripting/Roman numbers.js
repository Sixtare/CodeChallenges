function convertToRoman(num) {
  var myString = "";
  for(var i = 0; i < num; i++){
    myString += "I";
  }
  myString = myString.replace(/IIIII/g, "V");
  myString = myString.replace(/VV/g, "X");
  myString = myString.replace(/VIIII/g, "IX");
  myString = myString.replace(/XXXXX/g, "L");
  myString = myString.replace(/LL/g, "C");
  myString = myString.replace(/CCCCC/g, "D");
  myString = myString.replace(/DD/g, "M");
  myString = myString.replace(/IIII/g, "IV");
  myString = myString.replace(/XXXX/g, "XL");
  myString = myString.replace(/LXL/g, "XC");
  myString = myString.replace(/DCCCC/g, "CM");
  
  
  return myString;
}

convertToRoman(3999);