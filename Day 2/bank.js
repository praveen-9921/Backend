function account(name , balance) {
    return {
        name : name,
        balance : balance
    }
}
function deposit(balance, amount){
    if (amount <= 0) {
        return "Invalid deposit amount";
    }

    return balance + amount;
}

function withdraw(balance, amount) {
     if (amount <= 0) {
        return "Invalid withdrawal amount";
    }

    if (amount > balance) {
        return "Insufficient balance";
    }

    return balance - amount;
}

function checkBalance(balance) {
    return `Your Current Balance is : ${balance}`
}

module.exports = {
    account,
    deposit,
    withdraw,
    checkBalance
}