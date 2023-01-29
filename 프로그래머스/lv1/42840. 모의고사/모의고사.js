function solution(answers) {
    const maths = {
        one: [1,2,3,4,5],
        two: [2,1,2,3,2,4,2,5],
        three: [3,3,1,1,2,2,4,4,5,5]
    }
    const answerArr = [0,0,0];
    answers.forEach((v,i) => {
        if(maths.one[i % 5] === v) answerArr[0]++;
        if(maths.two[i % 8] === v) answerArr[1]++;
        if(maths.three[i % 10] === v) answerArr[2]++;
    })
    return answerArr.map((v,i) => v === Math.max(...answerArr) ? i+1 : null).filter(v => v);
}