function solution(a, b) {
    let n = a.length
    
    let arr = [];
    
    for(let i=0; i<n; i++){
        arr.push(a[i]*b[i])
    }
    
    return arr.reduce((a,b)=>(a+b))
}