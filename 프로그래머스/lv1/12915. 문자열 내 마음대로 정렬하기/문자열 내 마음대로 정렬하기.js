function solution(strings, n) {
    const newStr = strings.map(v => [...v]);
    return newStr.sort((a,b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]) {
            if(a > b) return 1;
            if(a < b) return -1;
            if(a === b) return 0;
        }
    }).map(v => v.join(""))
}