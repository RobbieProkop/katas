const timeConversion = (s) => {

  const start = s.slice(0, 2)
  const minSec = s.slice(2, s.length - 2)
  if (s.includes("AM")) {
    console.log("YES");
    if (s[0] === "1" && s[1] === "2") return "00" + minSec
    return start + minSec
  }

  if (s[0] === "1" && s[1] === "2") return "12" + minSec
  return (12 + Number(start)).toString() + minSec

}

const s = '11:01:00PM'
console.log(timeConversion(s))