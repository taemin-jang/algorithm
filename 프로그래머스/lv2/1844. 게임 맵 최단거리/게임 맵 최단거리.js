function solution(maps) {
    // 최단 거리를 구하는 문제이므로 BFS를 사용해서 풀어야함.
    // [x , y] 상 우 하 좌 순으로 배열 만듦
    let position = [[0,1],[1,0],[0,-1],[-1,0]];
    let [n, m] = [maps.length, maps[0].length];
    // 방문한 곳을 지도처럼 표현하기 위해 2차원 배열을 만듦
    let visit = Array.from(Array(n), e => Array(m).fill(0));
    // 방문 해야할 곳
    let need = [];
    // 처음 시작
    visit[0][0] = 1;
    need.push([0,0]);
    
    while(need.length){
        // 현재 위치 저장
        let [x, y] = need.shift();
        
        // 상 우 하 좌 순으로 가보면서 방문하지 않은 위치이면서, 흰색 길일 경우 현재 위치 + 1을 함으로써
        // [0, 0]부터 그 위치까지 이동하는 칸의 개수를 나타냄 
        for(let i = 0; i < 4; i++){
            const [newX, newY] = [x + position[i][0], y + position[i][1]];
            if(newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
            if(!visit[newX][newY] && maps[newX][newY]){
                visit[newX][newY] = visit[x][y] + 1;
                need.push([newX, newY]);
            }
        }
    }
    console.log(visit)
    return visit[n-1][m-1] ? visit[n-1][m-1] : -1;
}