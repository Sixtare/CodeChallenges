function sumPrimes(num) {
  var allNums = [];
  for(var i = 2; i <= num; i++){
    var myMax = i;
    for(var j = 1; j < i; j++){
      if(j !== 1 && i%j === 0){
        break;
      } else if(j == myMax - 1){
          allNums.push(i);
        }
    }
      
  } 
  

  allNums = allNums.reduce(function(a, b){
    return a + b;
  });
  
  return allNums;
}

sumPrimes(10);