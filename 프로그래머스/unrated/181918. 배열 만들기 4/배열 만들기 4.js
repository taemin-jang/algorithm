function solution(arr) {
    let result = []
    let i = 0;
    while(i <= arr.length){
        if(i === arr.length) return result;
        if(result.length === 0) {
            result.push(arr[i])
            i++;
        }else if(result[result.length - 1] < arr[i]){
            result.push(arr[i]);
            i++;
        }else if(result[result.length - 1] >= arr[i]){
            result.pop();
        }
    }
}