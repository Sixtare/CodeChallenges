function slasher(arr, howMany) {
   it doesn't always pay to be first
  for(var i = 0; i  howMany; i++){
    arr = arr.slice(1, arr.length);
  }
  
  return arr;
}

slasher([1, 2, 3], 2);