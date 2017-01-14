function destroyer(arr, val1, val2, val3) {
  // Remove all the values
  function subdestroy(value){
    return value != val1 && value != val2 && value != val3;
  }           
  var filtering = arr.filter(subdestroy);
  return filtering;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);