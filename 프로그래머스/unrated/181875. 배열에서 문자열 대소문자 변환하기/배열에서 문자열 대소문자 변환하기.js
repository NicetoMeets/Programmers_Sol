function solution(strArr) {
    let newArr = strArr.map((ele,i)=>{
        if(i%2==1){
            return ele.toUpperCase()
        }
        else {
            return ele.toLowerCase()
        }
    })
                            
    return newArr
}