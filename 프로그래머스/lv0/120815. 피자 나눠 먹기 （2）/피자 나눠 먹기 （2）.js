function solution(n) {
  let res=0;
  
  while(res>=0){
      
      if((6*res)%n==0 && res!=0){
      
      break;
    }
      
      res++
  }    
    
    return res
}