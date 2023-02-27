function solution(arr, divisor) {
    return arr.filter(v => !(v % divisor)).length ? arr.filter(v => !(v % divisor)).sort((a,b) => a - b) : [-1];
}