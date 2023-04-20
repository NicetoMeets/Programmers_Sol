function solution(my_string, letter) {

  let my = [...my_string]
  let lett = [...letter]
  
  let ans = my.filter((el)=>{
      return !lett.includes(el)
  })

  return ans.join('')
}