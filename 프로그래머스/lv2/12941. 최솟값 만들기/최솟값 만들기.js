function solution(A,B){
    let ans = [];
    A.sort((a,b)=>(a-b))
    B.sort((a,b)=>(b-a))
    
    for(let i = 0; i<A.length; i++){
        ans.push(A[i]*B[i])
    }
    return ans.reduce((a,b)=>(a+b),0)
}