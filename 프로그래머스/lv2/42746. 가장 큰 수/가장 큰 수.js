function solution(numbers){
    return numbers.map(v => v+'').sort((a,b) => (b+a) - (a+b)).join('')[0] === '0' ? '0' : numbers.map(v => v+'').sort((a,b) => (b+a) - (a+b)).join(''); 
}