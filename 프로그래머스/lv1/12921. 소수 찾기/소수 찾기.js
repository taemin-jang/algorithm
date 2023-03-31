function solution(n) {
    const arr = Array(n+1).fill(1);
    arr[0] = 0;
    arr[1] = 0;
    for(let i = 2; i < n; i++){
        let j = 2;
        while(i*j <= n){
          arr[i*j] = 0;  
          j++;
        }
    }
    return arr.filter(v => v).length;
}