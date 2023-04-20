function solution(array){
    let num = parseInt(array.length/2)
    let arr = array.sort((a,b)=>(a-b))
    return arr[num]
}