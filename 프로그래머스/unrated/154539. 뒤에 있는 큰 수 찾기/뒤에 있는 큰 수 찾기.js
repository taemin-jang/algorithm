function solution(numbers) {
    let result = Array(numbers.length).fill(-1);
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
        while(arr && numbers[arr.at(-1)] < numbers[i]){
            result[arr.pop()] = numbers[i];
        }
        arr.push(i)
    }
    return result
}