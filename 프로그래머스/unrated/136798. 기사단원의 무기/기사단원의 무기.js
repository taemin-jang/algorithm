function solution(number, limit, power) {
    // 약수를 저장하는 변수, number+1은 measure[0]은 사용하지 않고 1부터 하기위해
    let measure = Array(number+1).fill(0);
    for(let i = 1; i <= number; i++){
        // 약수의 개수는 제곱근을 제외하고 대칭이된다.
        // 따라서 제곱근까지 약수를 구한 후 카운트할 때 제곱근은 1을 더하고 아닌 약수는 2를 더해준다.
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                if(i / j === j) measure[i]++;
                else measure[i] += 2;
            }
        }
        // 만약 약수의 개수가 공격력의 제한 수치보다 클 경우 power로 변경
        if(measure[i] > limit) measure[i] = power;
    }
    return measure.reduce((acc,cur) => acc + cur, 0);
}