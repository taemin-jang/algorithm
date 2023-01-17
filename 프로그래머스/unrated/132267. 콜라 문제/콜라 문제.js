function solution(a, b, n) {
    let result = 0;
    let rest = 0;
    let service = 0;
    
    while(true){
        if(n < 2) break;
        if(n % a === 0){
            service = n / a;
            result += service * b;
            n = n - (service * a) + (service * b);
        }
        if(n % a < a){
            service = parseInt(n / a);
            if(service === 0){
                break;
            }
            result += service * b;
            rest = n % a;
            n = n - (service * a) + (service * b);
        }
    }
    return result;
}