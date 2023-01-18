function solution(progresses, speeds) {
    const deploy = progresses.map((v,i) => Math.ceil((100 - v)/speeds[i]));
    const result = [];
    let cnt = 1
    let max = deploy[0];
    deploy.forEach((v,i) => {
        if(max < deploy[i+1] || !deploy[i+1]){
            result.push(cnt);
            cnt = 1;
            max = deploy[i+1];
        }else{
            cnt++;
        }
    })
    return result;
}