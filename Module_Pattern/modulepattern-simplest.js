//modulepattern-simplest.js
const myModule = (function() {
    let privateCounter = 0; // Hidden from outside

    return {
        publicData: 10 // Accessible to everyone
    };
})();

console.log("Public Data:", myModule.publicData); // Output: 10
// console.log(myModule.privateCounter); // Output: undefined