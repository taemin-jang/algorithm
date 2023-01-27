function solution(bridge_length, weight, truck_weights) {
    let bridgeArray = []
    let count = 0;
    let n = truck_weights.length;
    let answer = [];
    while(answer.length !== n){
        if(bridgeArray.length === bridge_length){
            let truck = bridgeArray.pop();
            if(truck) answer.push(truck);
        }
        
        if(bridgeArray.reduce((acc,cur) => acc + cur, 0) + truck_weights[0] <= weight){
            bridgeArray.unshift(truck_weights.shift());
        }else{
            bridgeArray.unshift(0);
        }
        count++;
    }
    return count;
}