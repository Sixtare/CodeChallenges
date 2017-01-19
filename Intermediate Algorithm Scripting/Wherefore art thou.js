function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var propName = Object.getOwnPropertyNames(source);
  console.log(propName);
  
    for(var j = 0; j < collection.length; j++){
      var count = 0;
      for(var h = 0; h < propName.length; h++){
        if(collection[j].hasOwnProperty(propName[h]) && collection[j][propName] == source[propName]){
          count += 1;
          console.log(count);
          if(count == propName.length){
            arr.push(collection[j]);
            count = 0;
          }
        }
      }  
    }
 
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

