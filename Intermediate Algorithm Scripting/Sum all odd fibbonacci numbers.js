function sumFibs(num) {
  var fibbonaci = [1, 1];
  for(i = 0; i < num; i++){
    fibbonaci.push(fibbonaci[i] + fibbonaci[i+1]);
    if(fibbonaci[fibbonaci.length - 1] > num){
      break;
    }
  }
  function filtering(value){
    return value%2 !== 0 && value <= num;  //Only return odd numbers lesser than num
  }
  
  fibbonaci = fibbonaci.filter(filtering);
  fibbonaci = fibbonaci.reduce(function(a, b){
    return a + b;
  });
  
  return fibbonaci;
}

sumFibs(4);
