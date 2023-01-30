function solution(numbers) {
    let number = numbers.split('');
    let answer = [];
    for(let i = 1; i <= number.length; i++){
        permutation(number, i).forEach(v =>sosu(+v) ? answer.push(+v) : v);
    }
    return new Set(answer).size;
}

function sosu(number) {
    if(number === 1 || number === 0) return false;
    for(let i = 2; i < number; i++) {
        if(number < 10 && number !== i && !(number % i)) return false;
        if(!(number % i) && number >= 10) return false;
    }
    return true;
}

function permutation(arr, num) {
    let result = [];
    if(num === 1) return arr;
    
    arr.forEach((v,i,origin) => {
        let fixed = v;
        let restArr = origin.filter((value,index) => index !== i);
        let permuArr = permutation(restArr, num - 1);
        let arr = permuArr.map(v => fixed + v);
        result.push(...arr)
    })
    return result;
}