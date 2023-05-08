function solution(arr, queries) {
    let result = [];
    queries.forEach(v => {
        let [s, e, k] = v;
        let array = arr.slice(s,e+1);
        let newarr = array.filter(val => k < val);
        let min = newarr.length ? Math.min(...newarr) : -1;
        result.push(min);
    })
    return result;
}