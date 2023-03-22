function solution(s) {
    var answer = 0;
    var tmp = [];

    tmp = s.split(' ');

    for(let i=0; i<tmp.length; i++){

        if(tmp[i] == "Z"){
            answer -= Number(tmp[i-1]);
        } else {
            answer += Number(tmp[i]);
        }
    }

    return answer;
}
