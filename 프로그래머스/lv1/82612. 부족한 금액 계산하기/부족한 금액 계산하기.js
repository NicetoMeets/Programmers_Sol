function solution(price, money, count) {
    let cou = 0
    for(let i=1; i<=count; i++){
        cou += i
    }
    
    return money-price*cou<0? price*cou-money : 0
}