function binaryAgent(str) {
  str = str.split(' ');

  
  function converter(value){
    value = (String.fromCharCode(parseInt(value, 2)));
    return value;
    
  }
  
  str = str.map(converter);
  str = str.join('');
  console.log(str.charCodeAt(4));
  return str;
}

binaryAgent("01000001 01110010 0110010
1 01101110 00100111 01110100 00100000 
01100010 01101111 01101110 01100110
 01101001 01110010 01100101 01110011 
00100000 01100110 01110101 01101110 
00100001 00111111");