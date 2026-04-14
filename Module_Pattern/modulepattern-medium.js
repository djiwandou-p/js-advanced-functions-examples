//modulepattern-medium.js
const counterModule = (function() {
    let count = 0; // Persistent private state

    return {
        increment: function() {
            count++;
            console.log("Count is now:", count);
        },
        reset: function() {
            console.log("Resetting counter...");
            count = 0;
        }
    };
})();

counterModule.increment(); // Output: 1
counterModule.increment(); // Output: 2
counterModule.reset();
counterModule.increment(); // Output: 1 (Starts over!)