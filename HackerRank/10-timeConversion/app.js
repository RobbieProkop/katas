// const timeConversion = (s) => {

//   const start = s.slice(0, 2)
//   const minSec = s.slice(2, s.length - 2)
//   if (s.includes("AM")) {
//     if (s[0] === "1" && s[1] === "2") return "00" + minSec
//     return start + minSec
//   }
//   if (s[0] === "1" && s[1] === "2") return "12" + minSec
//   return (12 + Number(start)).toString() + minSec
// }
const timeConversion = (s) => {

  let hour = Number(s.slice(0, 2));
  const minSec = s.slice(2, s.length - 2);
  const period = s.slice(8);

  if (period === "AM") {
    hour = hour === 12 ? "00" : hour.toString().padStart(2, "0");
  } else {
    hour = hour === 12 ? "12" : (hour + 12).toString()
  }
  return hour + minSec
}

const s = '01:01:00AM'
console.log(timeConversion(s))