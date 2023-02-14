function solution(N, stages) {
    let total = stages.length;
    let answer = {};
    for(let i = 1; i<=N; i++){
        let notClear = stages.filter(v => v === i).length;
        answer[i] = notClear / stages.filter(v => v >= i).length;
    }
    return Object.entries(answer).sort((a,b) =>b[1] - a[1]).map(v => +v[0]);
}