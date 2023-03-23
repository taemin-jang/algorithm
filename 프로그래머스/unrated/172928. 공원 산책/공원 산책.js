function solution(park, routes) {
    let map = Array.from(Array(park.length), () => Array(park[0].length).fill(0));
    let directions ={
        // [x, y]
        "E" : [1,0],
        "W" : [-1,0],
        "N" : [0,-1],
        "S" : [0,1]
    }
    let [currentX, currentY] = [0,0];
    let [x, y] = [park[0].length, park.length];
    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            if(park[i][j] === "S") [currentX, currentY] = [j,i]; 
        }
    }
    
    for(let route of routes){
        let [direction, num] = route.split(" ");
        let [tempX, tempY] = [currentX, currentY];
        for(let i = 0; i < num; i++){
            let [newX, newY] = [currentX + directions[direction][0], currentY + directions[direction][1]];
            if(newX >= x || newY >= y || newX < 0 || newY < 0 || park[newY][newX] === "X") {
                // 만약 조건에 해당되지 않을 경우 이전 위치 값으로 돌아감
                [currentX, currentY] = [tempX, tempY];
                break;
            }
            // 현재 위치 최신화
            [currentX, currentY] = [newX, newY];
        }
    }
    return [currentY, currentX];
}