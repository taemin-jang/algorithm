function solution(n)
{
    return [...`${n}`].reduce((acc,cur) => +acc + +cur, 0);
}