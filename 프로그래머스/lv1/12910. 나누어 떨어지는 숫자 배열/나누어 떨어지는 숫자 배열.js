function solution(arr, div) {
    let answer = [];
    
    arr.forEach((el)=>{
        if(el%div==0) answer.push(el)
    })
    
    answer.sort((a,b)=>(a-b))
    
    return answer.length==0? [-1] : answer
}