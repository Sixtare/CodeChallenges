function uniteUnique(arr) {
  var args = Array.from(arguments);
  
  args = args.reduce(function(a, b){
    return a.concat(b);
  });
  var allNums = [];
  for(var x in args){
    if(allNums.indexOf(args[x]) == -1){
      allNums.push(args[x]);
    }
  }
 
  args = allNums;
  return args;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);