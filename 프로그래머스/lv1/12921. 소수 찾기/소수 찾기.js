function solution(n) {
    let numbers = []
    let answer = []
    const root = Math.sqrt(n)

    // 배열 초기설정
    for (let a = 0; a <= n; a++) numbers.push(true)
    numbers[0] = false
    numbers[1] = false
    
    for (let i = 2; i < root; i++) {
        if (numbers[i]) {
            
            for (let j = i * i; j <= n; j += i) {
                numbers[j] = false;
            }
        }
    }

    answer = numbers.filter(num => num === true)
    return answer.length
}