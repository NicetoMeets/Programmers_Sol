function solution(n){
  let a = 1
  let arr = []
  while(n>=2*a-1){
    arr.push(2*a-1)
    
    a++
  }
  return arr
}