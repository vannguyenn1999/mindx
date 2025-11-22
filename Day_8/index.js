// ? Câu 1
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names[names.length - 1]);

// ? Câu 2
const names_2 = ["John", "Jane", "Jim", "Jake"];
names_2[1] = "Mary";
console.log(names_2);

// ? Câu 3
const names_3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < names_3.length; i++) {
  console.log(names_3[i]);
}

// ? Câu 4
const names_4 = ["Alice", "Bob", "Charlie", "David"];
names_4.push("MindX");
console.log(names_4);

// ? Câu 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter((num) => num % 2 !== 0);
console.log(result);

// ? Câu 6
const names_6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
console.log(names_6.find((name) => name === "David"));

// ? Câu 7
const numbers_2 = [1, 2, 3, 2, 4, 2, 5];
const targetNumber = 2;
const result_2 = numbers_2.reduce((acc, num) => {
  return num === targetNumber ? acc + 1 : acc;
}, 0);

console.log(result_2);

// ? Câu 8
const numbers_8 = [5, 2, 9, 3, 7, 11, 8];
const result_8 = numbers_8.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(result_8);
console.log(Math.max(...numbers_8));

// ? Câu 9
const array = [1, 2, 3, 4, 5];
const result_9 = [];
for (let i = 1; i <= array.length; i++) {
  result_9.push(array[array.length - i]);
}
console.log(result_9);

// ? Câu 10
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(duplicatesArray)];
console.log(uniqueArray);

// Câu 11
const numbers_11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result_11 = numbers_11.reduce((acc, num) => acc + num, 0);
console.log(result_11);
