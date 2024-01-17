// using while loop

// const staircase = (n) => {
//   let base = "#"

//   let current = 1;
//   while (current <= n) {
//     if (current === n) {
//       console.log(base.repeat(n))
//     } else {
//       console.log(" ".repeat(n - current - 1), base.repeat(current))
//     }
//     current++
//   }
// }


//using for loop
// const staircase = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i === n) {
//       console.log("#".repeat(i))
//     } else {
//       console.log(" ".repeat(n - i - 1), "#".repeat(i))
//     }
//   }
// }

// using recursion
const printStaircase = (current, n) => {
  if (current > n) return;

  let base = "#".repeat(current);
  let spaces = " ".repeat(n - current)
  console.log(spaces + base)
  printStaircase(current + 1, n)
}
const staircase = (n) => {
  printStaircase(1, n)
}

console.log(staircase(6))