function solution(n) {
    let count = 1;
    
    while(n>7){
        count++
        n = n-7
    }
    
    return count
}