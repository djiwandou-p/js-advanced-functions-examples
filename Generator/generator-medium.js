//generator-medium.js
function* processTransaction(initialBalance, amount) {
    yield `Checking if balance (${initialBalance}) is sufficient for ${amount}...`;
    
    if (amount > initialBalance) {
        return "Transaction failed: Insufficient funds.";
    }

    yield `Deducting ${amount} from your account...`;
    
    const finalBalance = initialBalance - amount;
    yield `Updating balance. New balance is: ${finalBalance}`;
}

const banking = processTransaction(1000, 200);

console.log(banking.next().value); // Step 1
console.log(banking.next().value); // Step 2
console.log(banking.next().value); // Step 3