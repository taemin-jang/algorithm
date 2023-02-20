function solution(d, budget) {
    return d.sort((a,b) => a - b).filter(v => {
        if(v <= budget) {
            budget -= v;
            return v;
        }
    }).length;
}