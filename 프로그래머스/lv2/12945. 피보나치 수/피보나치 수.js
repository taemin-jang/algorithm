function solution(n) {
    //f(n) = f(n-1) + f(n-2)
    let dp = Array(n+1).fill(Infinity);
    dp[0] = 0;
    dp[1] = 1;
    let cnt = 2;
    while(cnt <= n){
        dp[cnt] = (dp[cnt-1] + dp[cnt-2]) % 1234567;
        cnt++;
    }
    return dp[n] 
}