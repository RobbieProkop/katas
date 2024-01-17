// Both upside down stiarcases

// const staircase = (n) => {
//   let base = "#"

//   while (n > 0) {
//     console.log(base.repeat(n))
//     n--
//   }
// }



// const staircase = (n) => {
//   if (n <= 0) return;

//   let base = "#"
//   console.log(base.repeat(n))

//   staircase(n - 1)
// }

const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i), "#".repeat(i))
  }
}

console.log(staircase(5))