function solution(X, Y) {
    let arr = '';
    let x = [...X];
    let y = [...Y];
    for(let i = 9; i >= 0; i--){
        if(X.includes(i) && Y.includes(i)){
            let cntX = x.filter(v => +v === i).length;
            let cntY = y.filter(v => +v === i).length;
            arr += (i+"").repeat(Math.min(cntX,cntY));
        }
    }
    if(arr === '') return '-1';
    if(arr[0] === '0') return '0';
    return arr;
}
