function fib(n) {
    if (n <= 0) {
        return [0];
    } else if (n == 1) {
        return [0, 1];
    } else if (n > 1) {
        return fib(n - 1).concat([fib(n - 2)[n - 2] + fib(n - 1)[n - 1]]);
    }
}