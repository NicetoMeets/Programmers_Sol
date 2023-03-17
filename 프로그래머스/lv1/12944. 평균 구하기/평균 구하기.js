function solution(a){
    const aver = a.reduce((acc, cur )=>(acc + cur), 0)

    return aver/a.length
}