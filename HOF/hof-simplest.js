//hof-simplest
const numbers = [10-15];

// The callback: checks if a number is even
const isEven = (num) => num % 2 === 0;

// .filter is a built-in HOF that takes our 'isEven' callback
const evenNumbers = numbers.filter(isEven);

console.log("Even Numbers:", evenNumbers); // Output: [11, 13, 15]