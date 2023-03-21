function solution(num, k) {
    let ans=[-1];
    let arr = Array.from(num.toString())
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==k){
            ans.push(i+1);
            break
        }
    }
    
    let a = ans.pop()
    return a 
    
}