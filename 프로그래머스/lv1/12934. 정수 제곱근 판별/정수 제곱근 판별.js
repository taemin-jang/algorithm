function solution(n) {
    return (Math.sqrt(n)+'').split('.').length === 1 ? (Math.sqrt(n)+1)**2 : -1;
}