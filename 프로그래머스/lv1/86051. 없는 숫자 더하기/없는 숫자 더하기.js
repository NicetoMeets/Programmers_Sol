function solution(numbers) {
  let arr09 = Array(10).fill().map((a,i)=>(i))
  
  let answer = arr09.filter((el)=>(!numbers.includes(el)))
  return answer.reduce((a,b)=>a+b,0)

}