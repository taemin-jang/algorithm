function solution(n) {
    let result = 0;
    let start = 1;
    let sum = 0;
    let index = 1;
    while(start <= n){
        sum = sum + index;
        if(sum >= n){
            if(sum === n) result++;
            else{
                start++;
                sum = 0;
                index = start;
            }
        }else{
            index++;
        }
    }
    return result;
}