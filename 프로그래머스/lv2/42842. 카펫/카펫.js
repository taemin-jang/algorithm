function solution(brown, yellow) {
    let sum = brown + yellow;
    for(let i = 1; i <= Math.sqrt(sum); i++){
        let row = ~~(sum / i);
        if(row >= i){
            if((row-2)*(i-2) === yellow) return [row, i];
        }
    }
}