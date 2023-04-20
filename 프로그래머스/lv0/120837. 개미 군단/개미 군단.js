function solution(n) {
  let count = 0;
  while (1) {
    if (n >= 5) {
      n -=5
      count+=1
    } else if (n < 5 && n >= 3) {
      n -=3
      count+=1
    } else if (n < 3 && n > 0) {
      n -=1
      count+=1
    } else if (n == 0) {
      return count;
    }
  }
}