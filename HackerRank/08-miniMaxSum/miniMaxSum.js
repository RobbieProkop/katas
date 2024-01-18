const minMaxSum = (arr) => {
  const sorted = arr.sort()
  const max = sorted.slice(1).reduce((acc, cur) => acc + cur)
  const min = sorted.slice(0, sorted.length - 1).reduce((acc, cur) => acc + cur)

  console.log(min, max);
}

const arr = [1, 3, 5, 7, 9]
console.log(minMaxSum(arr))