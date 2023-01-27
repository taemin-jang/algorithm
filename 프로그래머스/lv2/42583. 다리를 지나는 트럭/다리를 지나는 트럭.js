function solution(bridge_length, weight, truck_weights) {
    let truckWeights = [...truck_weights];
    let bridgeArray = []
    let answer = [];
    let count = 0;
    while(answer.length !== truck_weights.length){
        // 다리를 건너는 트럭의 수가 꽉 찼을 때
        if(bridgeArray.length === bridge_length){
            let truck = bridgeArray.pop();
            // 마지막에 있는 트럭이 0이 아닐경우 다리를 지난 트럭에 넣어준다.
            if(truck) answer.push(truck);
        }
        // 다리를 건너는 트럭 무게의 합과 이번에 다리를 건널 트럭 무게의 합이 
        // 다리가 견딜 수 있는 무게보다 작을 경우
        // bridgeArray에 추가해주고 아니면 0을 추가해준다.
        if(bridgeArray.reduce((acc,cur) => acc + cur, 0) + truckWeights[0] <= weight){
            bridgeArray.unshift(truckWeights.shift());
        }else{
            bridgeArray.unshift(0);
        }
        count++;
    }
    return count;
}