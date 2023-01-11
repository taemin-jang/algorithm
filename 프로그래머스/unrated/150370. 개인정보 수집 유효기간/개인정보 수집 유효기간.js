function solution(today, terms, privacies) {
    // 현재 날짜 [연, 월, 일]로 저장
    let current = today.split(".").map(v => +v);
    
    // 약관 종류가 {A: '6', B: '12'} 이런식으로 저장됨
    let termsKind = {};
    
    // 배열로 저장되어 있는 약관 정보를 알아보기 쉽게 하기 위해 termsKind라는 객체에 저장
    terms.forEach(v => {
        let [kind, period] = v.split(" ");
        termsKind[kind] = period; 
    })
    
    // 파기해야하는 개인정보 인덱스를 저장 
    let result = [];
    
    // 개인정보들을 for문 돌리면서 현재 날짜를 비교해 파기해야할 정보를 result에 넣어준다
    privacies.forEach((v,i) => {
        // 구조식 분해로 past에는 개인정보 수집 일자, kind에는 약관 종류가 저장
        let [past, kind] = v.split(" ");
        // 마찬가지로 개인정보 수집 일자를 년, 월, 일로 숫자 변환 후 저장
        let [y,m,d] = past.split(".").map(v => +v);
        // 개인정보 수집 일자 달에 약관 종류에 맞는 유효 기간을 더함 
        m+=+termsKind[kind];
        // 보관 가능 날짜는 유효기간 하루 전날까지라서 하루를 빼줌
        d--;
        
        // 만약 달이 12보다 클 경우
        if(m>=13){
            // 연도에는 달을 13으로 나눈 정수 값만큼 더해준다.
            // 13으로 나눈 이유는 12월까지 있기 때문에 12로 나누면 12월은 포함이 안됨
            y += m % 12 === 0 ? parseInt(m / 12) - 1 : parseInt(m / 12);
            
            // 달을 13으로 나눴을 때 0이면 새로운 년도 1월을 의미, 아닐경우 만약 14월이면 13으로 나눴을 때
            // 1이 남는다. 하지만 14월은 새로운 년도 2월을 의미하므로 1을 더해줌
            m = m % 12 === 0 ? 12 : m % 12;
        }
        // d-- 해서 일자가 0이 된 경우
        if(d === 0){
            // 0일인 경우는 없으므로 전달로 넘어가기 위해
            m--;
            // 전달로 넘어가면 그 달의 마지막 일인 28로 저장
            d=28;
             // m-- 해서 달이 0이 된 경우
            if(m === 0){
                // 0달인 경우는 없으므로 전년도로 넘어가기 위해
                y--;
                // 전년도로 넘어가면 그 해의 마지막 달인 경우 12로 저장
                m=12;
            }
        }
        console.log(y,m,d)
        // 만약 유효기간의 년도보다 현재 년도가 클 경우
        if(y < current[0]){
            // 해당 개인정보 인덱스 값을 +1한 후 result에 저장
            result.push(i+1);
            return;
        // 만약 년도가 같을 경우
        }else if(y === current[0]){
            // 유효기간의 달보다 현재의 달이 클 경우
            if(m < current[1]){
                result.push(i+1);
                return;
            // 먄약 달이 같을 경우
            }else if(m === current[1]){
                // 유효기간의 일수보다 현재의 일수가 더 클경우
                if(d < current[2]){
                    result.push(i+1);
                    return;
                }
            }
        }
    })
    return result;
}

// function solution(today, terms, privacies) {
//     let answer = [];
//     const obj = {};
//     let cnt = 1;

//     let tmp = today.split(".")
//     const today_year = parseInt(tmp[0])
//     const today_month = parseInt(tmp[1])
//     const today_day = parseInt(tmp[2])

//     for (let t of terms){
//         tmp = t.split(" ")
//         obj[tmp[0]] = tmp[1]
//     }

//     for (let p of privacies){
//         tmp = p.split(" ");
//         let year = parseInt(tmp[0].split(".")[0]);
//         let month = parseInt(tmp[0].split(".")[1]);
//         let day = parseInt(tmp[0].split(".")[2]);
//         let term = parseInt(obj[tmp[1]])

//         if (day - 1 === 0){
//             day = 28
//             month -=1
//             if(month === 0){
//                 year--;
//                 month = 12;
//             }
//         }else{
//             day -= 1
//         }

//         if (month + term > 12){
//             year += (parseInt((month + term) / 12));
//             if ((month + term) % 12 === 0){
//                 month = 12;
//             }else{
//                 month = (month + term) % 12;
//             }
//         }else{
//             month += term;
//         }
//         console.log(year,month,day)
//         if (today_year > year){
//             answer.push(cnt)
//         }else if (today_year === year){
//             if (today_month > month){
//                 answer.push(cnt)
//             }
//             else if (today_month === month){
//                 if(today_day > day){
//                     answer.push(cnt)
//                 }
//             }
//         }
//         cnt++;
//     }
//     return answer;
// }