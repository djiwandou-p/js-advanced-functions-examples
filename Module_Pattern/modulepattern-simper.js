//modulepattern-simper.js
const userModule = (function() {
    // Private logic
    function privateLog(msg) {
        console.log("[INTERNAL LOG]:", msg);
    }

    return {
        // Public method using the private logic via closure
        sayHello: function() {
            privateLog("Executing Hello function...");
            console.log("Hello, User!");
        }
    };
})();

userModule.sayHello();