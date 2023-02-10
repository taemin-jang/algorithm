function solution(id_list, report, k) {
    const kakao = {};
    const declar = {};
    const test = [];
    const stopID = [];

    id_list.forEach(v => {
        test[v] = 0;
        kakao[v] = []
        declar[v] = 0;
    })
    let setReport = [...new Set(report)];
    setReport.forEach((v,i) => {
        let [userID, declarID] = v.split(" ");
        
        kakao[userID].push(declarID);
        declar[declarID]++;
    })
    for(v in declar){
        if(declar[v] >= k) stopID.push(v);
    }
    for(v in kakao){
        for(val of stopID){
            if(kakao[v].includes(val)){
                test[v]++;
            }
        }
    }
    return Object.values(test);
    
}