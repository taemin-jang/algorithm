function solution(sizes) {
    let row = [];
    let verse = [];
    sizes.forEach((v,i) => {
        row[i] = Math.max(...v);
        verse[i] = Math.min(...v);
    })
    return row.sort((a,b) => b-a)[0]*verse.sort((a,b) => b-a)[0]
}