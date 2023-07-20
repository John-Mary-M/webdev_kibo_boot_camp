/**
 * fizzBuzz - A function that determines if a given number is divisible by 3 and/or 5 and returns a corresponding string.
 *
 * @param {number} num - The number to be checked
 * @returns {string|number} - "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, "FizzBuzz" if the number is divisible by both 3 and 5, and the number itself if it's not divisible by 3 or 5
 *
 * Usage:
 * const result = fizzBuzz(15);
 * // Output: "FizzBuzz"
 */

// WRITE YOUR ANSWER HERE
function fizzBuzz(num){
        if (num % 3 === 0 && num % 5 === 0) {
          return "FizzBuzz";
        }
        else if (num % 3 === 0) {
          return "Fizz";
        }
        else if (num % 5 === 0) {
          return "Buzz";
        }
        else {
          return num;
        }
      }






// DO NOT WRITE YOUR ANSWER BELOW HERE
window.addEventListener('load', function () {
  const testOutput = document.querySelector("#test-output");
  
// Test Cases:
  const testCaseOne = fizzBuzz(15)
  const testCaseTwo = fizzBuzz(12)
  const testCaseThree = fizzBuzz(20)
  const testCaseFour = fizzBuzz(13)

  // Test Output
  testOutput.innerText = `Your fizzBuzz function:
  - Returns any value: ${testCaseOne !== undefined}
  - Returns "FizzBuzz" when the number is divisible by both 3 and 5: ${testCaseOne !== undefined && testCaseOne === "FizzBuzz"}
  - Returns "Fizz" when the number is only divisible by 3: ${testCaseOne !== undefined && testCaseTwo === "Fizz"}
  - Returns "Buzz" when the number is only divisible by 5: ${testCaseOne !== undefined && testCaseThree === "Buzz"}
    - Returns the number when it is not divisible by 3 or 5: ${testCaseOne === "number" && testCaseFour === 13}
  `
})