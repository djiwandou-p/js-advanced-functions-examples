//rest-simpler.js
function sum(...numbers) {
    // .reduce iterates through the array and adds each number to the 'acc' (accumulator)
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum result:", sum(10, 20, 30, 40)); // Output: 100
