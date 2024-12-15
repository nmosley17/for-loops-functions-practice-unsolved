// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  let minValue = Infinity

  for (let i = 0; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }
  return minValue


}

export function findMaxValueInArray(array) {
  // Your code goes here...
  let maxValue = -Infinity

  for (let i = 0; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }
  return maxValue

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
