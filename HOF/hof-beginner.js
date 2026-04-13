//hof-beginner
// The HOF: It takes two numbers and an 'operation' function
function operate(a, b, operation) {
    return operation(a, b);
}

// The callback function
function add(x, y) {
    return x + y;
}

// We pass the 'add' function into 'operate'
let result = operate(3, 4, add); 
console.log("Result:", result); // Output: 7