// 2.3 next perfect square
function findNextPerfectSquare (square) {
    const root = Math.sqrt(square);
    if (!Number.isInteger(root)) {
        return -1;
    }
    const nextSquare = (root +1) ** 2;
    return nextSquare;
}

const intNum = 121;
const floatNum = 152;
console.log(`Next perfect square of ${intNum}: ${findNextPerfectSquare(intNum)}`);
console.log(`Next perfect square of ${floatNum}: ${findNextPerfectSquare(floatNum)}`);