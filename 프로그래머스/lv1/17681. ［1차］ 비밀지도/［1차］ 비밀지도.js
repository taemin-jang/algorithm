function solution(n, arr1, arr2) {
    let newArr1 = arr1.map(v => {
        let change = v;
        change = change.toString(2);
        if(change.length !== n){
            return "0".repeat(n - change.length) + change;
        }
        return change;
    })
    let newArr2 = arr2.map(v => {
        let change = v;
        change = change.toString(2);
        if(change.length !== n){
            return "0".repeat(n - change.length) + change;
        }
        return change;
    })
    let answer = [];
    for(let i = 0; i < n; i++){
        let str = "";
        for(let j = 0; j < n; j++){
            str += +newArr1[i][j] || +newArr2[i][j] ? "#" : " ";
        }
        answer.push(str);
    }
    return answer;
}