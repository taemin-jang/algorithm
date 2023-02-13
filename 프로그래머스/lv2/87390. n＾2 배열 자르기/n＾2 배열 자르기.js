function solution(n, left, right) {
    let arr = [];
    for(let i = left; i<=right; i++){
        // i의 대한 좌표값 구하기
        const [x,y] = [~~(i/n), i % n];
        // 해당 좌표에서 가장 큰 값에 + 1해주면 n 행 또는 n 열의 값이 나옴
        arr.push(Math.max(x,y)+1)
    }
    return arr;
}