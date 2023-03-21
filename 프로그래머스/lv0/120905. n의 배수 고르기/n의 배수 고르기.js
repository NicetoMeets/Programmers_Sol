function solution(n, numlist) {
    let ans = numlist.filter((el)=>{
        return el%n==0
    })
    return ans
}