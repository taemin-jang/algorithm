function solution(k, score) {
    // 명예의 전당에 들어갈 배열
    let newScore = [];
    // 명예의 전당의 최하위 점수들
    let result = [];
    
    score.forEach((v,i) => {
        // 우선 점수를 명예의 전당에 넣어준다.
        newScore.push(v);
        // 만약 명예의 전당 목록의 개수가 k의 값보다 클 경우
        if(newScore.length > k){
            // 오름차순으로 정렬 후 맨 가장 작은 값인 처음 값을 빼준다.
            newScore.sort((a,b) => a - b).shift();
        }
        // 명예의 전당을 오름차순으로 정렬한 후 가장 작은 값인 맨 처음 값을 result에 넣어준다.
        result.push(newScore.sort((a,b) => a - b)[0]);
    })
    return result;
}