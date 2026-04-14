//rest-beginner.js
// The '...' gathers all individual arguments into one array
function logEverything(...args) {
    console.log("Captured items:", args);
    console.log("Total items count:", args.length);
}

logEverything("Apple", "Banana", "Cherry", "Date"); 
// Output: Captured items: ["Apple", "Banana", "Cherry", "Date"]