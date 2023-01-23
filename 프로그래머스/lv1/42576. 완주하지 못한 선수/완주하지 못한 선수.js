function solution(participant, completion) {
    let i = 0;
    participant.sort();
    completion.sort();
    while(participant[i] === completion[i]){
        i++;
    }
    return participant[i];
}