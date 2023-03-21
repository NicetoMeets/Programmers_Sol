
function solution(arr){
    let answer = [];
    let res;

    for(let a=0; a<arr.length-1; a++){
        for(let b=a+1; b<arr.length; b++){
             answer.push(arr[a]*arr[b])
             }
        }
    res = Math.max(...answer)
    return res
    
    }