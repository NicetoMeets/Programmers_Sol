function solution(A, B) {

    if (A === B) return 0

    A = A.split('')
    let count = 0;

    while (count < B.length) {
        count++
        A.unshift(A.pop());
        let Ajoin = A.join('')

        if(Ajoin==B) break
    }
    return count==B.length? -1 : count
    
}