function solution(arr, queries) {
    queries.forEach(v => {
        let [left, right] = v;
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    })
    return arr;
}