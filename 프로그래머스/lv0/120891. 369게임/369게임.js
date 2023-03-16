function solution(order){
    let res= 0;
    let orde = String(order)
    let ord = [...orde]
    
    for(ele of ord){
        if(ele>0 && ele%3==0) res++
    }
    
    return res
}