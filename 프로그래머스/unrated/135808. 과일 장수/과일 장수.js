function solution(k, m, score) {

    var answer = 0;
    let a = 0

    score.sort((a,b)=>b-a)

    while(a < score.length){

        const newSlice = score.slice(a,a+m)

        a+= m

        if(newSlice.length === m){

            answer += (Math.min(...newSlice) * m)

        }
    }

    return answer;
}
