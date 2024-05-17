// Function for Task One
export function processArray(numbers) {
  return numbers.map((number) => {
    return number % 2 === 0 ? number * number : number * 3;
  });
}

// Function for Task 2
export function formatArrayStrings(strings, numbers) {
  return strings.map((string, index) => {
    return numbers[index] % 2 === 0
      ? string.toUpperCase()
      : string.toLowerCase();
  });
}

// Function for Task Three
export function createUserProfiles(originalNames, modifiedNames) {
  const userProfiles = [];

  for (let i = 0; i < originalNames.length; i++) {
    const userProfile = {
      originalName: originalNames[i],
      modifiedName: modifiedNames[i],
      id: i + 1,
    };

    userProfiles.push(userProfile);
  }

  return userProfiles;
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

const task3 = createUserProfiles(arrayStrings, task2);
console.log(`Task 3. \n-Takes an array of names and the array of modified names from Task 2. \n- Returns an array of objects, each containing originalName, modifiedName,
and id (auto-incremented starting from 1).\n\nArray of String: ${arrayStrings}\nModified Names From Task 2.: ${task2}\nResult`);
task3.map((result) => {
  console.log(result);
});
