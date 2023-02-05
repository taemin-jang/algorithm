function solution(brown, yellow) {
    // brown과 yellow를 합친 값의 넓이를 구하는 경우의 수를 구하면 됨.
    // (가로-2) * (세로-2)한 값이 yellow값이 되는 것을 알면 됨.
    let sum = brown + yellow;
    for(let i = 1; i <= Math.sqrt(sum); i++){
        let row = ~~(sum / i);
        if(row >= i){
            if((row-2)*(i-2) === yellow) return [row, i];
        }
    }
}