function solution(a, b, n) {
    let result = 0;
    let service = 0;
    
    while(true){
        if(n % a === 0){
            service = n / a;
            result += service * b;
            n = n - (service * a) + (service * b);
        }
        if(n % a < a){
            // 정수 만들기 틸트 연산자
            service = ~~(n / a);
            if(service === 0){
                break;
            }
            result += service * b;
            n = n - (service * a) + (service * b);
        }
    }
    return result;
}