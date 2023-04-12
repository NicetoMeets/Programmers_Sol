function solution(n, k) {
    let 양꼬치 = n
    let 음료수 = k-parseInt(n/10)
    
    return 12000*양꼬치+2000*음료수 
}