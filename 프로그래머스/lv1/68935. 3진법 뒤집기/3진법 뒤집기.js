function solution(n) {
    let strN = n.toString(3) + ''
    
    let a = strN.split('').reverse().join('')
    
    return parseInt(a,3)
}