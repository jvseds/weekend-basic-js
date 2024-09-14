function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let n = 1; n <= 10; n++) {
    console.log(`${n} element of fibo: ${fibonacci(n)}`);
}