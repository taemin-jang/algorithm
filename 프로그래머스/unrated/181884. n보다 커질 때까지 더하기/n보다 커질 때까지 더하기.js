function solution(numbers, n) {
    let sum = 0;
    for(let v of numbers){
        if(sum > n) break;
        sum += v;
    }
    return sum;
}