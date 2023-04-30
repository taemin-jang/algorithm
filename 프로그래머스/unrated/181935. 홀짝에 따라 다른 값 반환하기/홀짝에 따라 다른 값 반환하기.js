function solution(n) {
    let result = 0;
    if(n % 2){
        for(let i = 1; i <= n; i++){
            if(i % 2){
                result += i;
            }
        }
    }else{
        for(let i = 1; i <= n; i++){
            if(!(i % 2)){
                result += i*i;
            }
        }
    }
    return result;
}