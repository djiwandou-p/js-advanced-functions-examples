//closures-simplest.js
function counter() {
    let count = 0; // This state is preserved by the closure [7]

    return function() {
        count++; // Increment the private variable
        console.log("Current Count:", count);
    };
}

const increment = counter();
increment(); // Output: 1 [6]
increment(); // Output: 2 [6]