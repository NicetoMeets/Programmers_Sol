function solution(price){
    let ans = price>=500000? price*0.80 : price>=300000? price*0.90 : price>=100000? price*0.95 : price
    
    return parseInt(ans)
}