function solution(keymap, targets) {
    let keyMap = new Map();
    let answer = [];
    keymap.forEach(key => {
        for(let i = 0; i < key.length; i++){
            if(!keyMap.has(key[i]) || i < keyMap.get(key[i])) keyMap.set(key[i], i + 1);
        }
    })
    
    targets.forEach(target => {
        let cnt = 0;
        for(let i = 0; i < target.length; i++){
            cnt += keyMap.get(target[i]);
        }
        answer.push(cnt || -1);
    })
    return answer;
}