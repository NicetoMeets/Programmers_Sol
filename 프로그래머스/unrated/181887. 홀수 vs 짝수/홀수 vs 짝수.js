function solution(listnum) {
    let even=0;
    let odd=0;

    for(let i=0; i<listnum.length; i+=2){
        odd = odd+ listnum[i]
    }
    for(let i=1; i<listnum.length; i+=2){
        even = even+ listnum[i]
    }

    return odd>=even? odd : even
}