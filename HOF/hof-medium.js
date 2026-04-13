//hof-medium.js
// The HOF: It returns a NEW function that runs func2 then func1
function compose(func1, func2) {
    return function(x) {
        return func1(func2(x));
    };
}

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

// Create a combined function using our HOF
// It will first add 2, then multiply by 3
const composedFunction = compose(multiplyByThree, addTwo);

const result = composedFunction(5); // (5 + 2) * 3 = 21
console.log("Composed Result:", result); 