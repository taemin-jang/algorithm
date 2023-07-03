function solution(num_list) {
    let result = 0;
    let count = 0;
    for(let v of num_list) {
        if(v < 0) return result = count;
        count++;
    }
    return result !== 0 ? result : -1;
}