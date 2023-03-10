function solution(my_str, n) {
    let answer = [];
    let cnt = 0;

    for(let i=0; i<Math.ceil(my_str.length/n); i++){

        answer.push(my_str.substr(cnt,n));
        console.log(answer)
        cnt+=n
    }

    return answer;
}