function solution(storey) {
    let count = 0;
    storey = storey + "";
    let length = storey.split("").length;
    function BT(num1, num2, layer, count) {
        layer++;
        if(num2 === 0) return count;
        // left
        let rest = num2 % Math.pow(10, layer);
        if(rest <= Math.pow(10, layer) - rest) {
            count += rest / Math.pow(10, layer - 1);
            return BT(num2, num2 - rest, layer, count)
        }
        // right
        else if(rest > Math.pow(10, layer) - rest) {
            count += (Math.pow(10, layer) - rest) / Math.pow(10, layer - 1);
            return BT(num2, num2 + (Math.pow(10, layer) - rest), layer, count)
        }
    }
    const left = BT(+storey, +storey - +storey[length - 1], 1, +storey[length - 1]);
    const right = BT(+storey, +storey + (10 - +storey[length - 1]) , 1, (10 - +storey[length - 1]));
    return left <= right ? left : right;
}