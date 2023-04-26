function solution(n) {
    // 2차 배열
    let arr = Array.from(Array(n), () => Array(n).fill(0));
    let count= 1;
    let x = -1;
    let y = 0;
    // isX가 true이면 x++, y++만 false이면 x--, y--일때만
    let isX = true;
    // z는 시계방향으로 돌면서 점점 범위가 줄어들기 때문에 z로 범위 조절
    let z = 0;
    while(count <= n*n){
        if(isX){
            // 범위 안일경우
            if(x+1 < n-z || y+1 < n-z){
                if(arr[y][x+1] === 0){
                    arr[y][++x] = count;
                }else if(arr[y+1][x] === 0){
                    arr[++y][x] = count;
                }
            }
            // 범위 밖일 경우 isX를 false로 바꿔주고 범위가 1칸 줄어듦
            if(x+1 >= n - z && y+1 >= n - z){
                isX = !isX;
                z++;
            }
        }else if(!isX){
            if(x-1 >= z-1 || y-1 >= z){
                if(arr[y][x-1] === 0){
                    arr[y][--x] = count;
                }else if(arr[y-1][x] === 0){
                    arr[--y][x] = count;
                }
            }
            if(x-1 < z - 1 && y-1 < z){
                isX = !isX;
            }
        }
        count++;       
    }
    return arr;
}