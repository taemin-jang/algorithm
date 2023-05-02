function solution(num_list) {
    let a = num_list.reduce((acc,cur) => acc * cur,1);
    let b = num_list.reduce((acc,cur) => acc + cur,0);
    return a < b*b ? 1 : 0;
}