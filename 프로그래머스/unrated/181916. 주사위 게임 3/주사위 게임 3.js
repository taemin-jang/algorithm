function solution(a, b, c, d) {
    let array = [0,0,0,0,0,0];
    let arr = [a, b, c, d];
    arr.forEach(v => array[v-1]++);
    let set = new Set(arr);
    switch(set.size){
        case 4:
            return Math.min(...arr);
        case 3:
            let a = array.indexOf(1)+1;
            let b = array.indexOf(1,a)+1;
            return a * b;
        case 2:
            if(array.includes(2)){
                arr = [...set];
                return (arr[0] + arr[1]) * Math.abs(arr[0] - arr[1]);
            }else{
                let p = array.indexOf(3) + 1;
                let q = array.indexOf(1) + 1;
                return Math.pow(10 * p + q,2);
            }
        case 1:
            return 1111 * arr[0];
    }
}