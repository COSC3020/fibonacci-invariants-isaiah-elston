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

Recursion and induction go hand-in-hand in the fact that induction can very easily prove recursive definitions to be true. In inductive proofs, we need to establish an induction hypothesis in which we can assume to be true for the next smallest element. Thus, a good invariant for any recursive function would be one that relates the ith iteration to the (i - 1)th iteration. In this case, we know that the current iteration will **always** be equal to the sum of the previous two iterations. Therefore, a good invariant could be:

```javascript
//Invariant: n = (n - 1) + (n - 2) => arr[n] = arr[n - 1] + arr[n - 2]
```

Where `n` represents the `n`th Fibonacci number. Since the `fib(n)` function populates an array with the elements of the Fibonacci sequence up to the `n`th Fibonacci number, it carries that `arr[n] = arr[n - 1] + arr[n - 2]`. This is useful because it enables us to use the properties of the Fibonacci Sequence to show how the `n`th element of the array can always be defined by the `(n - 1)`th and `(n - 2)`th elements of the array. Since we know that, we can use the invariant to be able to write `fib(n)` to work for any arbitrary `n`.

Like with induction with it's induction-hypothesis, that invariant applies to every **recursive** case of the function. The base cases do not necessarily follow that invariant, but they also don't necessarily need to.
