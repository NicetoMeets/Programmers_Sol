function solution(s, n) {
    let text = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let answer = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            answer = answer + " "
        } else {
            let newIndex = text.indexOf(s[i]) + n
            answer = answer + text.charAt(newIndex)
        } 
    }return answer
}