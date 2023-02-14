function solution(board, moves) {
    let stack = [];
    let cnt = 0;
    const check = (val) => {
        if(stack[stack.length - 1] === val) {
            stack.pop();
            cnt++;
        }else{
            stack.push(val)
        }
    }
    moves.forEach(v =>{
        for(let i = 0; i <= board.length - 1; i++){
            if(board[i][v-1]) {
                check(board[i][v-1]);
                board[i][v-1] = 0;
                break;
            }
        }
    })
    return cnt*2;
}