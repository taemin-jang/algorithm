function solution(progresses, speeds) {
    progresses = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let max = 0;
    let count = 1;
    let result = [];
    progresses.forEach(progress => {
        if(!max) max = progress;
        else {
            if(progress <= max) count++;
            else {
                max = progress;
                result.push(count);
                count = 1;
            }
        }
    })
    result.push(count)
    return result;
}