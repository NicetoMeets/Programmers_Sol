function solution(start, end) {
    return Array(end-start+1).fill().map((a,i)=>(i+start))
}