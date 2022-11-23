// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?
// let x = 121;

// const isPalindrome = (x) => {
//   let output = false;
//   let newX = Array.from(String(x)).reverse().join("");
//   if (x === +newX) output = true;
//   return output;
// };

// console.log(isPalindrome(x));

let num = 4562;
// Function to reverse digits of num
const isPalindrome = (num) => {
  let rev_num = 0;
  let numCopy = num;
  while (numCopy > 0) {
    rev_num = rev_num * 10 + (numCopy % 10);
    numCopy = Math.floor(numCopy / 10);
  }
  if (num === rev_num) return true;
  return false;
};

console.log(isPalindrome(num));
