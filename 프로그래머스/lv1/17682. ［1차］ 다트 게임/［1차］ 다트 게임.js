function solution(dartResult) {
    let answer = [];
    let position = {
        "S" : 1,
        "D" : 2,
        "T" : 3,
    }
    let options = {
        "*" : 2,
        "#" : -1,
    }
    let num = dartResult.split(/[^0-9]/).filter(v => v !== "").map(v => +v);
    const str = dartResult.split("").filter(v => /[SDT\*\#]/.test(v));
    let index = -1;
    dartResult.split("").forEach((v,i) => {
        if(/[SDT]/.test(v)) {
            index++;
            num[index] = Math.pow(num[index], position[v]);
        }
        if(/\*/.test(v)) {
            for(let i = index === 2 ? 1 : 0; i <= index; i++){
                num[i] *= options[v];
            }
        }else if(/\#/.test(v)) {
            num[index] *= options[v];
        }
    })
    return num.reduce((acc, cur) => acc + cur, 0);
}