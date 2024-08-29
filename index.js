const numbers1 = [1, 2, 3];
numbers1[1] = 10;
console.log(numbers1);

const friends = ["Andrew", "Dave", "Michael"];
friends[3] = "Franklin";
console.log(friends);

let sum = 0;
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers2.length; i++) {
  sum += numbers2[i];
}
console.log(sum);

const numbers3 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers3.length; i++) {
  console.log(numbers3[i]);
}

const food = ["apple", "corn", "tomato", "pear", "cucumber"];
for (let i = 0; i < food.length; i++) {
  if (food[i].length < 5) {
    continue;
  }
  console.log(food[i]);
}

// const numbers4 = [4, 25, 346, 4, 54, 0.6, 76, 854, 39, 110];
// const max = Math.max(...numbers4)
// console.log(max);
const numbers4 = [4, 25, 346, 4, 54, 0.6, 76, 854, 39, 110];
// let maxNumber = 0;
let maxNumber = numbers4[0];
for (const number of numbers4) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(`The max number is: ${maxNumber}`);

const numbers5 = [46, 5, 36, 454, 504, 7, 376, 854, 39, 11];
for (const number of numbers5) {
  if (!(number % 2 === 0)) {
    continue;
  }
  console.log(number);
}
