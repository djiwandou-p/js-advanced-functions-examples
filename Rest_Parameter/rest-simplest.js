//rest-simplest.js
function greetUsers(greeting, ...names) {
    for (let name of names) {
        console.log(`${greeting}, ${name}!`);
    }
}

greetUsers("Welcome", "Alice", "Bob", "Charlie");
// Output: 
// Welcome, Alice!
// Welcome, Bob!
// Welcome, Charlie!