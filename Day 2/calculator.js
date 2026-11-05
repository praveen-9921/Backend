function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// way 1

// module.exports = {
//     add,
//     subtract
// }

// way 2
exports.add = add;
exports.subtract = subtract;


// Let's understand this.
// - add() is a function that adds two numbers.
// - subtract() subtracts two numbers.
// - module.exports makes these functions available to other files.