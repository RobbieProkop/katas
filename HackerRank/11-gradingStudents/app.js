// const gradingStudents = (grades) => {
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < 38) continue
//     if (((grades[i] + 5) % 5) >= 3) {
//       while(grades[i] % 5 !== 0){
//         grades[i]
//       }
//     }
//   }
//   return grades
// }

const gradingStudents = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) continue
    if (((grades[i] + 5) % 5) >= 3) {
      grades[i] = Math.ceil(grades[i] / 5) * 5
    }
  }
  return grades
}

const grades = [75, 67, 38, 33]
console.log(gradingStudents(grades))