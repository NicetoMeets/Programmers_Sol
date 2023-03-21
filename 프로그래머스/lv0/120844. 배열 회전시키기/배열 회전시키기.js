function solution(numbers, direction) {
    
    if(direction=="right"){
        let pop = numbers.pop();
        numbers.unshift(pop)
    }
    else if(direction=="left"){
        let shift = numbers.shift();
        numbers.push(shift)
    }
    
    return numbers
}