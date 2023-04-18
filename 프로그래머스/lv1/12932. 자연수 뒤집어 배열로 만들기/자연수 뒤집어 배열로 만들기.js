function solution(n) {
  let strN = String(n)
  let arr = strN.split('').reverse()

  return arr.map((el)=>(Number(el)))
}