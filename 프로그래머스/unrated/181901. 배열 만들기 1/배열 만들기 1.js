function solution(n, k) {
    let arr = [];
    for(let i = 1; k * i <= n; i++){
        arr.push(i*k);
    }
    return arr;
}