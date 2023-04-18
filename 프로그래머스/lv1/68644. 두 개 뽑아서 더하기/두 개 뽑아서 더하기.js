function solution(numbers) {
  let arr = [];
  let ans = [];
  for(let i=0; i<numbers.length-1; i++){
      for(let j=i+1; j<numbers.length; j++){
          arr.push(numbers[i]+numbers[j])
      }
  }
  
  arr.map((el)=>{
      if(!ans.includes(el)) ans.push(el)
  })

  return ans.sort((a,b)=>(a-b))

}