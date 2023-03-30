function solution(x) {
    let add = x.toString().split('').map(el=>Number(el)).reduce((a,b)=>(a+b));

    return x%add==0? true : false
    
}