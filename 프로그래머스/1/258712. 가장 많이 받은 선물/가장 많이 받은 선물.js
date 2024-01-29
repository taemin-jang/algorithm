function solution(friends, gifts) {
    const arr = Array.from(Array(friends.length), () => Array(friends.length).fill(0));
    const total = {};
    const countArr = Array(friends.length).fill(0);
    gifts.forEach((v, i) => {
        const [give, receive] = v.split(' ');
        const give_n = friends.indexOf(give);
        const receive_n = friends.indexOf(receive);
        arr[give_n][receive_n]++;
        if(!total[give_n]){
            total[give_n] = [1,0,1];
        }else if(total[give_n]){
            total[give_n][0]++;
            total[give_n][2] = total[give_n][0] - total[give_n][1];
        }
        
        if(!total[receive_n]){
            total[receive_n] = [0,1,-1];
        }else if(total[receive_n]){
            total[receive_n][1]++;
            total[receive_n][2] = total[receive_n][0] - total[receive_n][1];
        }
    })
    
    for(let index in total){
        let count = 0;
        for(let i = 0; i < friends.length; i++){
            if(index === i) continue;
            
            if(arr[index][i] > arr[i][index]) count++;
            else if(arr[index][i] === arr[i][index] && total[`${index}`][2] > (total[`${i}`]?.[2] ?? 0)){
                count++;
            }
        }
        countArr[index] = count;
    }
    return Math.max(...countArr);
}