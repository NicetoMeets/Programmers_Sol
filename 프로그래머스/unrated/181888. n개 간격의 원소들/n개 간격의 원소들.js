function solution(arr,n){
    let ans = [];
    for(let i=0; i<arr.length; i++){
        if(i==0 || i%n==0) ans.push(arr[i])
    }
    return ans
}