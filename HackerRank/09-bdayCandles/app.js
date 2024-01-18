const candles = (arr) => {
  const maxNum = Math.max(...arr)
  const max = arr.filter(num => num === maxNum).length
  console.log('max :>> ', max);
}

const arr = [4, 4, 1, 3]
console.log(candles(arr))