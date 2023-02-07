function solution(left, right) {
    let sum = 0;
    let sub = 0;
    for(let i = left; i <= right; i++){
        let cnt = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0) {
                if(Math.sqrt(i) === j){
                    cnt++;
                }else{
                    cnt += 2;
                }
            }
        }
        if(cnt % 2 === 0){
            sum += i;
        }else{
            sub += i;
        }
    }
    return sum - sub;
}