// 2.7 basic calculator
function basicOp (operation, val1, val2) {
    if (typeof val1 !== "number" || typeof val2 !== "number") {
        return "Error, at least one of the values is not a number";
    }

}

operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {if (b !== 0) return a / b}
};