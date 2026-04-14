//generator-beginner.js
// Defining a generator function
function* basicGenerator() {
    yield "Step 1: Start";
    yield "Step 2: Middle";
    yield "Step 3: End";
}

// Initializing the generator
const gen = basicGenerator();
console.log(gen.next().value); // Output: Step 1: Start