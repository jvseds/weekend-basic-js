// 2.7 basic calculator
function basicOp (operator, val1, val2) {
    if (typeof val1 !== "number" || typeof val2 !== "number") {
        return "Error, at least one of the values is not a number";
    }

    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => {if (b !== 0) {return a / b;} else {return "can't divide by 0";}}
    };

    if (operations[operator]) {
        return operations[operator](val1, val2);
    } else {
        return "Invalid operator!";
    }
}

const val1 = 5;
const val2 = 2;
const operator = "*";
console.log(`${val1} ${operator} ${val2} = ${basicOp(operator, val1, val2)}`);