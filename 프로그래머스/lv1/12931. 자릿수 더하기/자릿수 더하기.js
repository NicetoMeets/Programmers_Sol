
function solution(n){
  let strN = new String(n)
  return Array.from(strN).map((a)=>(Number(a))).reduce((a,b)=>(a+b),0)
}
