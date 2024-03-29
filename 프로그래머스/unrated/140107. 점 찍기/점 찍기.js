function solution(k, d) {
  let result = 0;
  for (let x = 0; x <= d; x += k) {
    const maxY = (d ** 2 - x ** 2) ** 0.5;
    result += Math.ceil(maxY / k) + (maxY % k === 0 ? 1 : 0);
  }
  return result;
}