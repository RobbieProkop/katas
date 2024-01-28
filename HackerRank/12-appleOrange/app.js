function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;

  for (const apple of apples) {
    if (apple <= 0) continue;
    if (apple + a >= s && apple + a <= t) appleCount++
  }

  for (const orange of oranges) {
    if (orange >= 0) continue;
    if (orange + b <= t && orange + b >= s) orangeCount++
  }

  console.log('appleCount :>> ', appleCount);
  console.log('orangeCount :>> ', orangeCount);

}

const s = 7;
const t = 10;
const a = 4;
const b = 12;
const apples = [2, 3, -4];
const oranges = [3, -2, -4];

countApplesAndOranges(s, t, a, b, apples, oranges)