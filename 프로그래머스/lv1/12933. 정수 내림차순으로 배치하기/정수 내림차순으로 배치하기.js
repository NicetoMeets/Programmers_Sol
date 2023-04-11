function solution(n) {
    let arr = [...String(n)]  
    return Number(arr.map((el)=>(Number(el))).sort((a,b)=>(b-a)).join(''))
}