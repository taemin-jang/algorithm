function solution(a, b, n) {
    let result = 0;
    while(n >= a){
            result += ~~(n / a) * b;
            n = n - (~~(n / a) * a) + (~~(n / a) * b);
    }
    return result;
}