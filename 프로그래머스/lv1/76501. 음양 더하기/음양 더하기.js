function solution(abs, sig) {
  
  let arr= []

    for(let i=0; i<abs.length; i++){
        if(sig[i]==true) arr.push(abs[i])
        else if(sig[i]==false) arr.push(-abs[i])
    }
    return arr.reduce((a,b)=>(a+b),0)
}