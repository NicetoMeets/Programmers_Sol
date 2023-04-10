
function solution(n){

    let subak = "수박"

    if(n%2==0){
        return subak.repeat(n/2)
    }
    else {
        return subak.repeat(parseInt(n/2)) + '수'
    }

}