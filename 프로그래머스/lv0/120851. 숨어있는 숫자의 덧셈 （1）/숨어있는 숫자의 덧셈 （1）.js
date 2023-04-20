function solution(str){
    let arrStr = [...str]

    return arrStr.filter((el)=>(Number.isInteger(+el))).reduce((a,b)=>(+a + +b),0)
}