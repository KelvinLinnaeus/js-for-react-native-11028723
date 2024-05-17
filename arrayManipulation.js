// Function for Task One
function processArray(numbers) {
  return numbers.map((number) => {
    return number % 2 === 0 ? number * number : number * 3;
  });
}

// Function for Task 2
function formatArrayStrings(strings, numbers) {
  return strings.map((string, index) => {
    return numbers[index] % 2 === 0
      ? string.toUpperCase()
      : string.toLowerCase();
  });
}

// Test
let arrayNumbers = [1, 2, 3, 4, 5];
let arrayStrings = ["Kelvin", "Peter", "Micheal", "John", "Jesus"];

const task1 = processArray(arrayNumbers);
console.log(`Task 1.\n- Takes an array of numbers as an argument.\n- Returns a new array where each even number is squared and each odd number
is tripled.\nArray of numbers: ${arrayNumbers}\nResult: ${task1}`);

const task2 = formatArrayStrings(arrayStrings, arrayNumbers);
console.log(`Task 2.\n -The function takes two arrays as arguments:
   An array of strings.
   An array of numbers processed by processArray.\n-The function modifies each string based on its corresponding number:
  Capitalize the entire string if the number is even.
  Convert the string to lowercase if the number is odd.\nArray of String: ${arrayStrings}\nResult: ${task2}`);
