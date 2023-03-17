function solution(arr){
    let sm = Math.min(...arr)
    let res = arr.filter((el)=>{
        if(arr.length==1) return -1
        else return el!=sm
    })
    return res
}