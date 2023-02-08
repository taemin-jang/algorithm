function solution(absolutes, signs) {
    return absolutes.map((v,i) => signs[i] ? v : -v).reduce((acc, cur) => acc + cur, 0);
}