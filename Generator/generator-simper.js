//generator-simper.js
function* taskRunner() {
    yield "Initializing system...";
    yield "Connecting to database...";
    yield "System ready.";
}

const runner = taskRunner();
console.log(runner.next().value);
console.log(runner.next().value);
console.log(runner.next().value);