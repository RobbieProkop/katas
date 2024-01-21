const gradingStudents = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) continue
    if (((grades[i] + 5) % 5) >= 3) {
      grades[i] = grades[i] + (grades[i] % 5) - 1
    }
  }
  return grades
}

const grades = [75, 67, 38, 33]
console.log(gradingStudents(grades))