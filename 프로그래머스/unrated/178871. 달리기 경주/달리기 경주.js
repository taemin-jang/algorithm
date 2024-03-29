function solution(players, callings) {
    let maps = {};
    for(let i = 0; i < players.length; i++){
        maps[players[i]] = i;
    }
    callings.forEach(v => {
        let num = maps[v];
        let temp = players[num-1];
        players[num-1] = v;
        players[num] = temp;
        maps[v]--;
        maps[players[num]]++;
    })
    return players;
}