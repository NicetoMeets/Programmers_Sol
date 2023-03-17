function solution(left, right){

    let count = 0;
    let res = [];

    for(let i=left; i <= right; i++){
        for(let j=1; j<=i; j++){
            if(i%j==0){
                count++;
            }
        }
        if(count%2==1) res.push(-i)
        else if(count%2==0) res.push(i)
        count = 0;
    }
    
    let answer = res.reduce((a,b)=>(a+b),0)

    return answer
}