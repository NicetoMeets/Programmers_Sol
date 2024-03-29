function solution(number, limit, power) {
    var answer = 0;
    let counter = 0; // 약수 카운터
    
    for(let i=1; i<=number; i++){
    	// 카운터를 0으로 만들어준다.
        counter = 0;
        
        // 약수를 구하는 방법
        // 1. 나머지가 0이 되는 수를 찾는다.
        // 2. 약수는 대상을 제외하고 대상의 2/1 보다 클 수 없기 때문에 
        // 반만 테스트 진행 하면 된다.(시간 단축)
        // 핵심은 약수를 얼마나 빨리 찾아내느냐에 있는듯 하다.
        for( let k=1; k<=i/2; k++){
            if(i%k === 0){
                counter+=1;
            }
        }
        // 반을 나눈다는것은 본인은 제외 한것임으로 카운터에 1을 더해준다.
        counter +=1;
        
        // 리미트 조건에 따른 값을 더해준다.
        if(counter > limit){
            answer +=  power;
        }else{
            answer += counter;
        } 
    }
    return answer;
}