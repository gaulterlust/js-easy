// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
  let count = 0;
  for (let i of str) {
      if (i === char) {
          count++;
      }
  }
  return count;
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o')); // Виведе: 2
console.log(countOccurrences("banana", 'a')); // Виведе: 3

module.exports = countOccurrences;