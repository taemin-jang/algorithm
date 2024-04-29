function solution(my_string) {
    const len = my_string.length;
    const result = [];
    for(let i = 0; i < len; i++){
        result.push(my_string.slice(i));
    }
    return result.sort();
}