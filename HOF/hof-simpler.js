//hof-simpler.js
const numbers = [10-15];

// We define a function that handles both filtering and transforming
function filterAndTransform(arr, filterCallback, transformCallback) {
    // Chaining two HOFs together
    return arr.filter(filterCallback).map(transformCallback);
}

const square = (num) => num * num;
const isEven = (num) => num % 2 === 0;

const result = filterAndTransform(numbers, isEven, square);
console.log("Result:", result); // Output: [13, 16, 17]