function solution(k, tangerine) {
    let tanger = {};
    let cnt = 0;
    for(let v of tangerine){
        if(!tanger[v]) tanger[v] = 1;
        else tanger[v]++;
    }
    let arr = Object.entries(tanger).sort((a,b) => b[1] - a[1])
    for(let v of arr) {
        cnt++;
        if(v[1] < k) {
            k -= v[1];
        }else break;
    }
    return cnt;
}