function sumAll(arr) {
  var myMax = Math.max.apply(null, arr);
  var myMin = Math.min.apply(null, arr);
  
  for(var i = myMin+1; i < myMax; i++){
    arr.push(i);
  }
  
  arr = arr.reduce(function(a, b){
    return a + b;
  });
  return arr;
}

sumAll([1, 4]);
