[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
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
//Invariant: n = (n - 1) + (n - 2)
```

Where `n` represents the $n$th fibonacci number. Thus, the invariant is related to the properties of the Fibonacci Sequence and **not** the `fib(n)` function itself. Like the addendum discusses below, this invariant explains that the array can always populate itself by virtue of the Fibonacci Sequence and its intrinsic properties.

Like with induction with it's induction-hypothesis, that invariant applies to every **recursive** case of the function. The base cases do not necessarily follow that invariant, but they also don't necessarily need to.

#### Addendum
Since the `fib(n)` function will always return an `Array` data-type, the aforementioned invariant can be extended to denote that:

```javascript
arr[n] = arr[n - 2] + arr[n - 1];
```
Where `arr` arbitrarily represents the output of `fib(n)` at the `n`th iteration. Therefore, the `n`th value of the array is always defined by the `(n - 1)`th and `(n - 2)`th values of the array. In conclusion, the array's previous values will always define the following value whenever a recursive step occurs.