function solution(A,B){
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    return A.reduce((arr,cur,index) => arr + (cur * B[index]),0);
}