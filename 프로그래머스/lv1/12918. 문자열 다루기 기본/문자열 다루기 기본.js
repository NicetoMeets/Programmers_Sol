function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
      return false;
    }
    if(s.indexOf('e')>-1){
        return false
    }
    if (s.indexOf('e')==-1){
    if(isNaN(s))
      return false;
    }
  
    return true;
  }