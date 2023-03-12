function solution(x, y, n) {
    // y+1은 배열이 0부터 시작해 40개면 39에서 끝나기 때문
    let arr = Array(y+1).fill(Infinity);
    arr[x] = 0;
    
    for(let i = x + 1; i <= y; i++){
        if(x <= i - n) arr[i] = Math.min(arr[i], arr[i-n] + 1);
        if(!(i % 2) && x <= i / 2) arr[i] = Math.min(arr[i], arr[i/2] + 1);
        if(!(i % 3) && x <= i / 3) arr[i] = Math.min(arr[i], arr[i/3] + 1);
    }
    return arr[y] === Infinity ? -1 : arr[y];
}