function booWho(bool) {
 
  if(bool === Boolean() || bool === Boolean(true)){
    return true;
  } else{
      return false;
    }
  return bool;
}

booWho(true);