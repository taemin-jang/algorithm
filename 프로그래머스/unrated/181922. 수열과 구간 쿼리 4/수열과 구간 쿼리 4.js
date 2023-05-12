function solution(arr, queries) {
    let result = arr.slice();
    queries.forEach(v => {
        let [s, e, k] = v;
        for(let i = s; i <= e; i++){
            if(i % k === 0){
                result[i]++;
            }
        }
    })
    return result;
}