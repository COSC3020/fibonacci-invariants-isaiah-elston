# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

### Answer

Since the Fibonacci Sequence is recursively defined, we can use similar logic to what we discussed in the lecture pertaining to **useful** invariants to discern one for this function. 

Recursion and induction go hand-in-hand in the fact that induction can very easily prove recursive definitions to be true. In inductive proofs, we need to establish an induction hypothesis that we can assume to be true for the next smallest element. Thus, a good invariant for any recursive function would be one that relates the ith iteration to the (i - 1)th iteration. In this case, we know that the current iteration will **always** be equal to the sum of the previous two iterations. Therefore, a good invariant could be:

```javascript
//Invariant: n = (n - 1) + (n - 2) => arr[n] = arr[n - 1] + arr[n - 2]
```

The way I implemented the `fib(n)` function ensures that it will always return an array containing `n - 1` *(on a zero-based index)* elements. The invariant above is useful because it shows that the `n`th element of the array will **always** be defined by the previous two elements of the same array. Since the base cases will populate the first two elements with `0` and `1`, the `fib(n)` function can then **always** use `arr[n - 1]` and `arr[n - 2]` to continually define `arr[n]` by virtue of the invariant I specified above. Therefore, `fib(n)` can correctly output `arr[n]` **for any arbitrary recursive call** because it will **always** know the values of `arr[n - 2]` and `arr[n - 1]` during any `n`th iteration.
