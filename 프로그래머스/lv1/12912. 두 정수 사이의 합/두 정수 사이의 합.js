function solution(a, b) {
    if(b>=a) return (b-a+1)*(2*a+ (b-a))/2
    else return (a-b+1)*(2*b+ (a-b))/2
}