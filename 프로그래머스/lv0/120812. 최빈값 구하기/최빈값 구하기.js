function solution(array){
    let count = {}
    let arr = []

    
    array.forEach(ele => {
        if(!count[ele]) count[ele]=1
        else ++count[ele]        
    });
    
    for(let key in count){
        arr.push([key,count[key]])
    }

    arr.sort((a,b)=>(b[1]-a[1]))
    
    if(arr.length==1) return parseInt(arr[0][0])
    if (arr[0][1] === arr[1][1]) return -1;

    return parseInt(arr[0][0])
}
