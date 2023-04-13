function solution(s){
    let arr = [];
    for(let i = 0; i < s.length; i++){
        while(arr.length && arr[arr.length - 1] === s[i]){
            arr.pop();
            i++;
        }
        if(i >= s.length) break;
        arr.push(s[i])
    }
    return arr.length ? 0 : 1;
}