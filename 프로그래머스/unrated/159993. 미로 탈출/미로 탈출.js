function solution(maps) {
    const [row, column] = [maps.length, maps[0].length];
    // 레버까지 이동하기 위한 배열
    const lArr = Array.from(Array(row), (e) => Array(column).fill(0));
    // 출구까지 이동하기 위한 배열
    const eArr = Array.from(Array(row), (e) => Array(column).fill(0));
    // 상 우 하 좌로 이동하기 위한 배열
    const position = [[1,0],[0,1],[-1,0],[0,-1]];
    let need = [];
    // 레버와 출구, 시작 위치
    let l = [];
    let e = [];
    let s = [];
    // 레버와 출구의 도착 유무
    let isL = false;
    let isE = false;
    
    // 시작 위치, 레버 위치, 출구 위치 저장
    maps.forEach((v,i) => {
        if(v.includes("S")) s.push(i,v.indexOf("S"));
        if(v.includes("L")) l.push(i,v.indexOf("L"));
        if(v.includes("E")) e.push(i,v.indexOf("E"));
    })
     
    // 시작 위치에 1을 저장
    lArr[s[0]][s[1]] = 1;
    need.push(s)
    while((!isL || !isE) && need.length){
        // [row, column] 현재 좌표
        const [r, c] = need.shift();
        // 레버를 당기기 위함
        if(!isL){
            for(let i = 0; i < 4; i++){
                const [newR, newC] = [r+position[i][0], c+position[i][1]];
                if(newR < 0 || newC < 0 || newR >= row || newC >= column) continue;
                if(!lArr[newR][newC] && maps[newR][newC] !== "X"){
                    // 이전 위치 값에서 1을 더해줌으로써 해당 위치까지의 거리를 알 수 있음
                    lArr[newR][newC] = lArr[r][c] + 1;
                    need.push([newR, newC]);
                }
                // 레버를 당겼으면 레버 위치를 need에 넣어주고 이제 출구를 찾음
                if(lArr[l[0]][l[1]]) {
                    isL = true;
                    need = [l];
                    eArr[l[0]][l[1]] = 1;
                }
            }
        }else{
            // 출구를 찾기 위함
            for(let i = 0; i < 4; i++){
                const [newR, newC] = [r+position[i][0], c+position[i][1]];
                if(newR < 0 || newC < 0 || newR >= row || newC >= column) continue;
                if(!eArr[newR][newC] && maps[newR][newC] !== "X"){
                    eArr[newR][newC] = eArr[r][c] + 1;
                    need.push([newR, newC]);
                }
                if(eArr[e[0]][e[1]]) {
                    isE = true;
                    need = [];
                }
            }
        }
    }
    // 각 시작 위치에 1을 넣고 시작했으므로 -2를 해줌
    return eArr[e[0]][e[1]] ? lArr[l[0]][l[1]] + eArr[e[0]][e[1]] - 2 : -1;
}