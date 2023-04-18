function solution(n) {
  let a = n+1
  let Ncount = 0;
  
  n.toString(2).split('').map((el)=>{
      if(el=='1') Ncount++
  })

  while(true){
      let Acount = 0;
      a.toString(2).split('').map((el)=>{
      if(el=='1') Acount++})
          
      if(Ncount==Acount) return a
      a++
  }
}