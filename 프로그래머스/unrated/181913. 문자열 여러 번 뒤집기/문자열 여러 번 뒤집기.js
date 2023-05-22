function solution(my_string, queries) {
    let str = [...my_string];
    let reStr = [];
    queries.forEach(v => {
        let [s, e] = v;
        reStr = str.slice(s, e+1).reverse();
        str = str.slice(0, s).concat(reStr, str.slice(e+1));
    })
    return str.join("");
}