function solution(n) {
    return Array.from(String(n)).map(a=> Number(a)).reduce((a,b)=>a+b)
}