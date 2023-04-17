function solution(n){
    let ans;

    for(let i=2; i<n; i++){
      if(n%i==1){
        ans = i
        break
      }
    }
    return ans
}