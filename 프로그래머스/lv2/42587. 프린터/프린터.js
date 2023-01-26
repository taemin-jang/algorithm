function solution(priorities, location) {
    let arr = [];
    let answer = 0;
    priorities = priorities.map((v,i) => [v,i]);
    while(priorities.length){
        let tamp = priorities.shift();
        if(priorities.some(v => tamp[0] < v[0])) priorities.push(tamp);
        else {
            arr.push(tamp);
            if(arr[answer][1] === location) break;
            else answer++;
        }
    }
    return ++answer;
}