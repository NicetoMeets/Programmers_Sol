function solution(arr){
    let copy = [...arr]
    let big = copy.sort((a,b)=>(b-a))[0]
    let ind = arr.indexOf(big)

    return [big, ind]
}