function summation (num) {
    if (num <= 0) {
        return "Error - number must be positive";
    }
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const num = 8;
console.log(`sum from 1 to ${num} is: ${summation(num)}`);

const num2 = -5;
console.log(`sum from 1 to ${num2} is: ${summation(num2)}`);