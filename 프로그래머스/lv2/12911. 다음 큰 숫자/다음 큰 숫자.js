function solution(n) {
    let arr = [...n.toString(2)];
    let cnt = arr.filter(v => +v).length;
    let lastIndex = n.toString(2).lastIndexOf(1);
    
    for(let i = lastIndex; i >=0; i--){
        if(+arr[i]) {
            arr[i] = 0;
            if(i-1 < 0){
                arr.unshift(1);
            }else if(+arr[i-1]){
                continue;
            }else{
                arr[i-1] = 1;
                break;
            }
        }
    }
    
    for(let i = arr.length-1; i >=0; i--){
        if(arr.filter(v => +v).length === cnt) break;
        if(!+arr[i]) {
            arr[i] = 1;
        }
    }
    return parseInt(arr.join(""),2)
}