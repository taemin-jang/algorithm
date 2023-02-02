function solution(s, skip, index) {
    let answer = '';
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter(v => ![...skip].includes(v));
    let sArr = [...s];
    for(v of sArr){
        let idx = alphabet.indexOf(v);
        const newIdx = (id) => {
            return id > alphabet.length - 1 ? newIdx(id - alphabet.length) : id;
        }
        answer += alphabet[newIdx(idx+index)];
    }
    return answer;
}