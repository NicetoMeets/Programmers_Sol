function solution(s) {
    let nums = s.split(' ').map((el)=>(Number(el)))


    let arr = `${Math.min(...nums)} ${Math.max(...nums)}`
    return arr
    
}