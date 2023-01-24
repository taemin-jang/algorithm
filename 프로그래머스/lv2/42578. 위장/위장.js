function solution(clothes) {
    const cnt = {};
    let sum = 1;
    clothes.forEach((v,i) => {
        if(!cnt[v[1]]){
            cnt[v[1]] = [v[0]];
        }else{
            cnt[v[1]].push(v[0]);
        }
    })
    for(v in cnt){
        sum *= (cnt[v].length + 1);
    }
    return sum - 1;
}