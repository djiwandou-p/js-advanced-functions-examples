//closure-medium.js
const createCounter = function() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
};

const player1Score = createCounter();
const player2Score = createCounter();

console.log("Player 1:", player1Score()); // 1
console.log("Player 1:", player1Score()); // 2
console.log("Player 2:", player2Score()); // 1 (Starts fresh!) [6, 11]