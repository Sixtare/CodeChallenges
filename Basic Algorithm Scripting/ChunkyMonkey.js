function chunkArrayInGroups(arr, size) {
  // Break it up.
  var multipleArr = [];
  for(var i = 0; i < arr.length;  i += size){
    multipleArr.push(arr.slice(i, i + size));
  }
  
  return multipleArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);