function solution(n, m) {
    const answer = [];
    const max = (a, b) => {
        return a % b === 0 ? b : max(b, a % b);
    }
    if(n > m) answer.push(max(n, m));
    else answer.push(max(m, n));
    answer.push(answer[0] * (n / answer[0]) * (m / answer[0]));
    return answer;
}