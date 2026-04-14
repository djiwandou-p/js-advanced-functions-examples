//generator-simplest.js
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const numGen = generateNumbers();

// Each call to .next() resumes the function until the next yield
console.log(numGen.next().value); // 1
console.log(numGen.next().value); // 2
console.log(numGen.next().value); // 3