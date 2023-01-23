function solution(a, b) {
    return Array(Math.abs(a-b)+1).fill(0).map((v,i) => v = a >= b ? b + i : a + i).reduce((acc,cur) => acc + cur,0);
}