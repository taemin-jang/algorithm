function solution(k, m, score) {
    let boxs = [];
    let box = [];
    score.sort((a,b) => b - a).forEach((v,i) => {
        box.push(v);
        if((i+1) % m === 0){
            boxs.push(box);
            box = [];
        }
    })
    // 2차원 배열로 되어 있어 우선 1차원 배열 길이가 m인 것들만 고른 후
    // 그 1차원 배열들은 현재 내림차순으로 되어 있어서 i가 m-1이면 제일 작은 값들만 걸러내고 그 값들을 m으로 곱해주어
    // map으로 재배열을 해준다.
    // 그러고 배열 값들을 다 더해주고 리턴하면 된다.
    return boxs.filter(v => v.length === m).map(v => v.filter((v,i) => i === m - 1) * m).reduce((acc,cur) => acc + cur, 0);
}
