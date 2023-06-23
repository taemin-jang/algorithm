function solution(my_string, n) {
    let str = "";
    for(let i = my_string.length - n; i < my_string.length; i++){
        str += my_string[i];
    }
    return str;
}