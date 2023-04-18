function solution(num) {
  let arr = Array(num.length-4).fill("*")
  
  for(let i=num.length-4; i<num.length; i++){
      arr.push(num[i])
  }
  return arr.join('')
}