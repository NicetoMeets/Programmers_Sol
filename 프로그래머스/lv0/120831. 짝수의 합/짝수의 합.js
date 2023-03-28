function solution(n) {
    let count = 0;
    for(let a=2; a<=n; a+=2){
        count+=a
    }
    
    return count
}