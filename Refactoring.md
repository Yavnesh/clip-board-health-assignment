# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Explanation:



The test suite covers several scenarios:

When the 'event' argument is undefined or null, the function should return the trivial partition key '0'.
When the 'event' argument is an object with a 'partitionKey' property, the function should return that value.
When the 'event' argument is an object without a 'partitionKey' property, the function should return the SHA3-512 hash of the JSON stringified 'event'.
When the 'event' argument is not an object, the function should return the SHA3-512 hash of the string 0.
When the resulting partitionKey is longer than the maximum length of 256 characters, the function should return the truncated SHA3-512 hash.


Removed the unnecessary If statements to make the code more simpler and easier to read.

Simplified the conditional logic by using only one if statement instead of nested if statements and multiple return statements.
