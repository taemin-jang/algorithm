function solution(num_list) {
    let a = "";
    let b = "";
    num_list.forEach((v,i) => {
        if(v % 2) a += v;
        else b += v;
    })
    return +a + +b;
}