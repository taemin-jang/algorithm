function solution(lottos, win_nums) {
    // 0의 개수
    let cnt = lottos.filter(v => !v).length;
    // lotto 맞은 개수
    let lotto = lottos.filter(v => win_nums.includes(v)).length;
    // 최저 순위
    let worst = 0;
    if(lotto === 6) worst = 1;
    else if(cnt === 6) worst = cnt;
    else worst = Math.abs(lotto - 6) + 1 >= 6 ? 6 : Math.abs(lotto - 6) + 1;
    return [Math.abs(lotto + cnt - 6) + 1 >= 6 ? 6 :Math.abs(lotto + cnt - 6) + 1, worst]
}