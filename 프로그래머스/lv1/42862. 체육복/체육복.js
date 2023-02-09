function solution(n, lost, reserve) {
    let arr = new Set(reserve.slice());
    let cnt = 0;
    lost = lost.filter(v => {
        if(arr.has(v)){
            arr.delete(v);
        }else{
            return v;
        }
    }).sort((a,b) => a - b);
    for(let i = 0; i < lost.length; i++){
        if(arr.has(lost[i])){
            arr.delete(lost[i])
            continue;
        }
        if(arr.has(lost[i]-1)) {
            arr.delete(lost[i]-1)
            continue;
        }
        if(arr.has(lost[i]+1)){
            arr.delete(lost[i]+1)
            continue;
        }
        cnt++;                   
        
    }
    return n - cnt;
}