function solution(n, m) {
    
    let 최대공약수;
    for(let i=1; i<=Math.min(n,m); i++){
        if(n%i==0 && m%i==0) 최대공약수=i
    }
    
    let 최소공배수;
    for(let j=Math.max(n,m); j<=n*m; j++){
        if(j%n==0 && j%m==0){
            최소공배수=j
            break
        }
    }
    return [최대공약수, 최소공배수]
}