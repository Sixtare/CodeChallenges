function pairElement(str) {
  var doublePair = [];
  var finalPair = [];
 
  
  console.log(str.length);
  for(i = 0; i < str.length; i++){
    
    doublePair = [];
 
    if(str.charAt(i) == 'G'){
      doublePair.push(str.charAt(i), 'C');
      finalPair[i] = doublePair;
    } else if(str.charAt(i) == 'C'){
        doublePair.push(str.charAt(i), 'G');
        finalPair[i] = doublePair;
      } else if(str.charAt(i) == 'T'){
          doublePair.push(str.charAt(i), 'A');
          finalPair[i] = doublePair;
        }else if(str.charAt(i) == 'A'){
          doublePair.push(str.charAt(i), 'T');
          finalPair[i] = doublePair;
         }
    
  
  
  } 
  return finalPair;
}

pairElement("GCG");
