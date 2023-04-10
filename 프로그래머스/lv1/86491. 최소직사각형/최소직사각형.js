function solution(sizes) {

    let size = sizes.map((el)=>el.sort((a,b)=>a-b))

    let arr1 = size.map((el)=>(el[0]))
    let arr2 = size.map((el)=>(el[1]))
    
    return Math.max(...arr1)*Math.max(...arr2)
}