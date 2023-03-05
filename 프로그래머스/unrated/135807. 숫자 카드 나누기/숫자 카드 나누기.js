function solution(arrayA, arrayB) {
    // 최대 공약수 구하기
    const gong = (a,b) => {
       return (a % b) ? gong(b, a % b) : b;
    }
    let a = gong(arrayA[0],arrayA[1]);
    let b = gong(arrayB[0],arrayB[1]);
    let answer = 0;
    if(arrayA.length >= 2){
        for(let i = 2; i < arrayA.length; i++){
            a = gong(a, arrayA[i]);
            b = gong(b, arrayB[i]);
        }
    }else{
        a = arrayA[0];
        b = arrayB[0];
        // if((!arrayB.filter(v => !(v % a)).length && a !== 1)){
        //     if(!arrayA.filter(v => !(v % b)).length && b !== 1){
        //         answer = b > answer ? b : answer;
        //     }
        //     answer = a > answer ? a : answer;
        // }
    }
    // 나머지가 없으면 안나눠진다는 의미 조건 성립
    if((!arrayB.filter(v => !(v % a)).length && a !== 1)){
        answer = a > answer ? a : answer;
    }
    if(!arrayA.filter(v => !(v % b)).length && b !== 1){
            answer = b > answer ? b : answer;
    }
    return answer;
}
