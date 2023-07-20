/**
 * countCharactersInString - A function that counts the number of characters in a given string without using the length method.
 *
 * @param {string} str - The input string
 * @returns {number} - The number of characters in the input string
 *
 * Usage:
 * const result = countCharactersInString("Hello, World!");
 * // Output: 13
 */

// WRITE YOUR ANSWER HERE
function countCharactersInString(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
          count++;
        }
        return count;
      }








// DO NOT WRITE YOUR ANSWER BELOW HERE
window.addEventListener('load', function () {
  const testOutput = document.querySelector("#test-output");
  
// Tests:
  const testCaseOne = countCharactersInString("Hi there, I'm a helpful string")
  const testCaseTwo = countCharactersInString("Hello")
  
  testOutput.innerText = `Your countCharactersInString function:
  - Returns any value: ${testCaseOne !== undefined}
  - Returns a value of data type "number": ${typeof testCaseOne === "number" && typeof testCaseTwo === "number"}
  - Returns the correct number of characters in the string: ${testCaseOne === 30}
  `
})