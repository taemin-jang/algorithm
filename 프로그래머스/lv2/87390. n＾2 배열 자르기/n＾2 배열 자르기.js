function solution(n, left, right) {
    let arr = [];
    for(let i = left; i<=right; i++){
        const [x,y] = [~~(i/n), i % n];
        arr.push(Math.max(x,y)+1)
    }
    return arr;
}