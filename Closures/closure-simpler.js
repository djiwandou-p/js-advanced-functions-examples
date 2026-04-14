//closure-simpler.js
const functionFactory = function(x) {
    // x is "trapped" in this scope for the inner function to use [9]
    return function(y) {
        return x + y;
    };
};

const add5 = functionFactory(5); // x is now 5
console.log(add5(3)); // Output: 8 (5 + 3) [9]