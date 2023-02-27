function solution(keymap, targets) {
    let keyMap = new Map();
    let answer = [];
    for(let key of keymap){
        for(let i = 0; i < key.length; i++){
            if(!keyMap.has(key[i]) || i + 1 < keyMap.get(key[i])) keyMap.set(key[i], i+1);
        }
    }
    for(let target of targets){
        let cnt = 0;
        for(let i = 0; i < target.length; i++){
            cnt += keyMap.get(target[i]);
        }
        if(cnt) {
            answer.push(cnt);
            continue;
        }
        answer.push(-1);
    }
    return answer;
}