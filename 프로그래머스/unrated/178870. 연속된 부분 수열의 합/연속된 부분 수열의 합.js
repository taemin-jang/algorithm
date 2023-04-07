function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let arr = [];
    while(right < sequence.length){
        if(sum <= k) {
            if(sum === k) {
                arr.push([left, right, right - left]);
            }
            right++;
            sum += sequence[right];
        }
        else {
            sum -= sequence[left];
            left++;
        }
    }
    return arr.sort((a,b) => a[2] - b[2])[0].slice(0,2); 
}