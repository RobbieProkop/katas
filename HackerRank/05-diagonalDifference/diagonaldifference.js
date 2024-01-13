// 0 1 2
// 3 4 5
// 6 7 8

function diagonalDifference(arr) {
  const size = arr[0];
  console.log('size :>> ', size);
  const square = arr.slice(1)
  let sum1 = 0;
  let sum2 = 0;
  let index = 0;

  let newArr = []

  // loop through to create a matrix
  for (let i = 0; i < size; i++) {
    newArr[i] = []
    for (let j = 0; j < size; j++) {
      newArr[i][j] = square[index]
      index++;
    }
  }
  for (let i = 0; i < size; i++) {
    console.log(`newArr[${i}][${i}] :>> `, newArr[i][i]);
    sum1 += newArr[i][i];
    sum2 += newArr[i][size - 1 - i]
  }

  return Math.abs(sum1 - sum2)
}

// const arr = [3, 0, 1, 2, 3, 4, 5, 6, 7, 8] //3x3 square
// const arr = [3, 11, 2, 4, 4, 5, 6, 10, 8, -12]
const arr = [4, 11, 2, 4, 7, 4, 5, 6, 8, 10, 8, -12, 0, 9, 1, 6] // 4x4 matrix

console.log(diagonalDifference(arr))