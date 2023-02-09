function solution(n, lost, reserve) {
    let arr = new Set(reserve.slice());
    let cnt = 0;
    lost = lost.filter(v => {
        // 만약 잃어버린 학생 중 여벌이 있는 학생은 자기가 써야하므로
        // arr에서 빼주고 오름차순 정렬했다.
        if(arr.has(v)){
            arr.delete(v);
        }else{
            return v;
        }
    }).sort((a,b) => a - b);
    
    for(let i = 0; i < lost.length; i++){
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