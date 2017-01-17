function diffArray(arr1, arr2) {
  function filtering(value){
    return this.indexOf(value) < 0;
  }

var filtered = arr1.filter(filtering, arr2).concat(arr2.filter(filtering, arr1));
return filtered;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);