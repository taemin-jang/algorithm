function solution(participant, completion) {
    const map = new Map();
    participant.forEach(value => {
        if(!map.get(value)){
            map.set(value, 1);
        }else{
            map.set(value, map.get(value) + 1);
        }
    })
    
    completion.forEach(value => {
        map.set(value, map.get(value) - 1);
    })
    
    return [...map].filter(arr => arr[1] === 1).flat()[0];
}