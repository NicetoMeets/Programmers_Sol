
function solution(s){

  let arrS = s.toLowerCase().split('')
  let pcount = 0;
  let ycount = 0;
  
  arrS.forEach((el)=>{
      
      if(el=='p') pcount++
      else if(el=='y') ycount++

  })
  
  return pcount==ycount? true : false
  
}