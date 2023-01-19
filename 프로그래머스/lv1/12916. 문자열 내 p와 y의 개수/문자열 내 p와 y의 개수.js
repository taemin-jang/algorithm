function solution(s){
    return s.toLowerCase().split('').filter(v => v === 'p').length === s.toLowerCase().split('').filter(v => v === 'y').length ? true : false; 
}