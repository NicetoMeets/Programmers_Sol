function solution(numbers, n) {
    let sum=0;
    numbers.forEach((a)=>{
        if(sum<=n) sum+=a;
    })
    return sum
}