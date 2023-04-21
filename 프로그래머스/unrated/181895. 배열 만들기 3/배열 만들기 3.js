function solution(arr, int) {
  return arr.slice([int[0][0]], [int[0][1]+1]).concat(arr.slice([int[1][0]], [int[1][1]+1]))
}