function solution(n) {
    let answer = "";
    while(n >= 3){
        answer += (n % 3) + '';
        n = ~~(n/3);
    }
    answer += n;
    return parseInt(answer, 3);
}