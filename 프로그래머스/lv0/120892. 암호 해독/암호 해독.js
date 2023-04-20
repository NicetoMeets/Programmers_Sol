function solution(ci , code){
  let ans=[]
  for(let i=1; i<=ci.length/code; i++){
    ans.push(ci.charAt(code*i-1))
  }
  return ans.join("")
}