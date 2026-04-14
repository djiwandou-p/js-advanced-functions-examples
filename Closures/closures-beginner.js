//closure-beginner.js
function outer() {
    var outerVar = "I am outside!"; // Variable in the outer scope

    function inner() {
        var innerVar = "I am inside!";
        console.log(outerVar); // Accessing the outer variable [4]
        console.log(innerVar);
    }

    return inner;
}

const closureFunction = outer();
closureFunction(); 
