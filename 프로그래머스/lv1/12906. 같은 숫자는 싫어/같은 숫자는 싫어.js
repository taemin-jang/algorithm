function solution(arr)
{
    let answer = [];
    arr.forEach((v,i) => {
        if(answer.length === 0 || answer[answer.length-1] !== v){
            answer.push(v);
        }
    })
    return answer;
}