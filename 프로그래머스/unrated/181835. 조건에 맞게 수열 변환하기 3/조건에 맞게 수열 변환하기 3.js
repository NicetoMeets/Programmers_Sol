function solution(arr, k) {
    let ans;
    if(k%2==1){
        ans = arr.map((ele)=>(ele*k))
    }
    else {
        ans = arr.map((ele)=>(ele+k))
    }
    return ans
}