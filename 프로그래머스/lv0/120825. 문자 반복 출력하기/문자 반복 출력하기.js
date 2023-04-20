function solution(str, n) {
  let arr = [...str]

  let newarr = arr.map((el)=>(el.repeat(n)))

  return newarr.join('')

}