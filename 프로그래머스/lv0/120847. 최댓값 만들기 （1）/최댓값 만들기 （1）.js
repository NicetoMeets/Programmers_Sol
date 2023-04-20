
function solution(numbers) {
  numbers.sort((a,b)=>(a-b));
  let a = numbers.pop()
  let b = numbers.pop()
  
  return a*b
}