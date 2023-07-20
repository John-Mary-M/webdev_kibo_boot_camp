/**
 * bothNumbersAreEven - A function that checks if both input numbers are even.
 *
 * @param {number} a - The first number to be checked
 * @param {number} b - The second number to be checked
 * @returns {boolean} - True if both numbers are even, false otherwise
 *
 * Usage:
 * bothNumbersAreEven(4, 6);
 * Output: true
 */

// WRITE YOUR ANSWER HERE
function bothNumbersAreEven(a, b) {
  return (a % 2 === 0 && b % 2 === 0)}










// DO NOT WRITE YOUR ANSWER BELOW HERE
window.addEventListener('load', function () {
  const testOutput = document.querySelector("#test-output");
  
// Test Cases:
  const testCaseOne = bothNumbersAreEven(5, 7)
  const testCaseTwo = bothNumbersAreEven(2, 4)
  const testCaseThree = bothNumbersAreEven(3, 4)

  // Test Output
  testOutput.innerText = `Your bothNumbersAreEven function:
  - Returns any value: ${testCaseOne !== undefined}
  - Returns a value of data type "boolean": ${typeof testCaseOne === "boolean" && typeof testCaseTwo === "boolean"}
  - Returns true when both numbers are even: ${testCaseOne !== undefined && !!testCaseTwo}
  - Returns false when only one number is even: ${testCaseOne !== undefined && !testCaseThree}
  - Returns false when both numbers are odd: ${testCaseOne !== undefined && !testCaseOne}
  `
})