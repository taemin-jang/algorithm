function solution(n) {
    let result = [];
    while(n >= 1){
        result.push(n);
        if(n === 1){
            return result;
        }
        if(n % 2){
            n = 3 * n + 1;
        }else{
            n = n / 2;
        }
    }
}