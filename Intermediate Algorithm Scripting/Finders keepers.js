function findElement(arr, func) {
  var num = 0;
  
  num = arr.filter(func);
  num = num.shift();
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0;});