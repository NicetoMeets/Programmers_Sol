function solution(my_string) {
  return my_string.split('').filter((el)=>(!['a','e','i','o','u'].includes(el))).join('')
}