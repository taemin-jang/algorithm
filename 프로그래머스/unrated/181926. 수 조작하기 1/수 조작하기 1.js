function solution(n, control) {
    const key = {
        "w" : +1,
        "s" : -1,
        "d" : +10,
        "a" : -10,
    }
    const arr = [...control];
    
    arr.forEach(v => n += key[v])
    return n;
}