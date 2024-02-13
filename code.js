function fib(n) {
    if(n <= 0) {
        return [0];
    } else if (n == 1) {
        return [0, 1];
    } else if (n > 1) {
        let prev = fib(n - 1);
        prev.push(prev[n - 1] + prev[n - 2])
        return prev;
    }
}
