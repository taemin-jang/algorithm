function solution(t, p) {
    let result = [];
    for(let i = 0; i<= t.length - p.length; i++){
        result.push(t.slice(i,i+p.length));
    }
    return result.map(v => +v).filter(v => v <= +p).length;
}