function solution(citations) {
    let newArr = citations.sort((a,b) => b - a);
    let arr = {};
    for(let i = 0; i < newArr.length; i++){
        if(i >= newArr[i]) return i;
        arr[newArr[i]] = i+1;
    }
    return Object.values(arr)[0];
}