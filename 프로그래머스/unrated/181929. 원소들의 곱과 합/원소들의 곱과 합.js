function solution(num_list) {
    let multi = num_list.reduce((a,b)=>(a*b),1)
    let add = num_list.reduce((a,b)=>(a+b),0)
    let addPow = Math.pow(add,2)
    
    return multi<addPow? 1 : 0
}