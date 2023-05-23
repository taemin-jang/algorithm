function solution(intStrs, k, s, l) {
    let result = [];
    intStrs.forEach(v => +v.slice(s, s+l) > k ? result.push(+v.slice(s, s+l)) : 0);
    return result;
}