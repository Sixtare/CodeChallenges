function mutation(arr) {
 arr[0] = arr[0].toLowerCase();
 arr[1] = arr[1].toLowerCase();
 var count = 0;
    
  if(arr[0] == arr[1]){
    return true;
  } 
  
  for(var i = 0; i < arr[1].length; i++){
    if(arr[0].indexOf(arr[1].charAt(i)) >= 0){
     count += 1;
      if(count == arr[1].length){
        return true;
      }
    } else {
        return false;
      }
  
  }
 
  
}
mutation(["zyxwvutsrqponmlkjihgfedcahfqerqeebauu", "qrstu"]);