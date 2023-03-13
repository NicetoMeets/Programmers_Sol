function solution(dots){

    let x = [];
    let y = [];

    dots.map((el)=>{
        x.push(el[0]);
        y.push(el[1]);
    });

    return (Math.max(...x)-Math.min(...x))*(Math.max(...y)-Math.min(...y))

}