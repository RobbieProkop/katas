// const candles = (candles) => {
//   const maxNum = Math.max(...candles)
//   const max = candles.filter(num => num === maxNum).length
//   return max
// }

const candles = (candles) => {
  let maxNum = 0;
  let maxCount = 0;

  for (const num of candles) {
    if (num > maxNum) {
      maxNum = num;
      maxCount = 1
    } else if (num === maxNum) {
      maxCount++;
    }
  }

  return maxCount
}

const arr = [4, 4, 1, 3]
console.log(candles(arr))