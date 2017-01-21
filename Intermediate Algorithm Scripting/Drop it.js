function dropElements(arr, func) {
  // Drop them elements.
  var index = arr.findIndex(func);
  console.log(index);
  if(index >= 0){
    arr.splice(0, index);
    return arr;
  }
  
  if(index == -1){
    arr.splice(0, arr.length);
    return arr;
  }
  
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });