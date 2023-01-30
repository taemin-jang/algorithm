// function solution(numbers) {
//     let number = numbers.split('');
//     let answer = [];
//     for(let i = 1; i < numbers; i++){
//         permutation(number, i).forEach(v =>sosu(v) ? answer.push(+v) : v);
//     }
//     return new Set(answer).size;
// }

// function sosu(number) {
//     if(+number === 1 || +number === 0) return false;
//     for(let i = 2; i < number; i++) {
//         if(+number < 10 && +number !== i && !(+number % i)) return false;
//         if(!(+number % i) && +number >= 10) return false;
//     }
//     return true;
// }

// function permutation(arr, num) {
//     let result = [];
//     if(num === 1) return arr;
    
//     arr.forEach((v,i,origin) => {
//         let fixed = v;
//         let restArr = origin.filter((value,index) => index !== i);
//         let permuArr = permutation(restArr, num - 1);
//         let arr = permuArr.map(v => fixed + v);
//         result.push(...arr)
//     })
//     return result;
// }

function solution(numbers) {

    let num = [...numbers]

    // 순열 통해 경우의 수 구하기
    const permutation = (arr, selectNum) =>{
        let result = [];
        if(selectNum === 1) return arr.map((v)=> [v]);

        arr.forEach((v,idx,arr)=>{
            const fixer = v;
            const restArr = arr.filter((val, index)=> index !== idx);
            const permuArr = permutation(restArr, selectNum-1);
            const combineFixer = permuArr.map((v)=> fixer + v);
            result.push(...combineFixer);
        })
        return result
    }

    // 소수 판별
    const checkPrime = (num)=>{
        let start = 2;
        if(num === 0 || num === 1) return false
        while(start <= Math.sqrt(num)){
            if(num % start++ < 1) return false
        }
        return true
    }

    let answer = []

    for(let i = 1; i <= num.length; i++){
        permutation(num, i).forEach( v=>{
            checkPrime(parseInt(v)) ?  answer.push(parseInt(v)) : answer
        })
    }
    console.log([...new Set(answer)])
    return [...new Set(answer)].length

}
