// Function for Task One
function processArray(numbers) {
  return numbers.map((number) => {
    return number % 2 === 0 ? number * number : number * 3;
  });
}

// Test
let arrayNumbers = [1, 2, 3, 4, 5];
let arrayStrings = ["Kelvin", "Peter", "Micheal", "John", "Jesus"];

const task1 = processArray(arrayNumbers);
console.log(`Task 1.\n- Takes an array of numbers as an argument.\n- Returns a new array where each even number is squared and each odd number
is tripled.\nArray of numbers: ${arrayNumbers}\nResult: ${task1}`);
