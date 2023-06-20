function solution(n) {
    const hanoi = (n, from, between, to) => {
        // 원판의 개수가 1개일 때 이동
        if(n === 1) return [[from, to]];
        let result = [];
        // 짝수이면서 맨 처음 이동해야 할 경우 1번에서 2번으로 이동하므로 to와 between을 바꿔주면 홀짝 개념으로 번갈아가면서 이동할 수 있다.
        result = result.concat(hanoi(n-1, from, to, between));
        // 이동하려했던 목적지로 이동
        result.push([from, to]);
        // 2번에서 목적지로 이동
        result = result.concat(hanoi(n-1, between, from, to));
        return result;
    }
    // 하노이 탑은 쌓인 개수가 홀수이면서 맨 처음 이동해야 할 경우 1번에서 3번으로 이동한다.
    return hanoi(n, 1, 2, 3);
}