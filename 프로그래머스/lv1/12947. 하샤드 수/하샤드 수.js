function solution(x) {
    let num = (x+'').split('').reduce((acc,cur) => acc + +cur,0);
    return x % num === 0;
}