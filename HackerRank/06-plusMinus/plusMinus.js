const plusMinus = (arr) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let count = arr.length;

  arr.forEach(num => {

    switch (true) {
      case num > 0:
        positive++;
        break;
      case num < 0:
        negative++;
        break;
      case num === 0:
        zero++;
    }
  })

  const positiveRatio = (positive / count).toFixed(6)
  const negativeRatio = (negative / count).toFixed(6)
  const zeroRatio = (zero / count).toFixed(6)

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);

}

const arr = [1, 1, 0, -1, -1]
console.log(plusMinus(arr))