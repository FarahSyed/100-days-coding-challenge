# Day-60 Task:

## Description
Read the following Articles and Code along with it:

- [Functions in JavaScript](https://javascript.info/function-basics)
- [Function Expressions in JavaScript](https://javascript.info/function-expressions)

## Coding Tasks

### Function Basics:

**Task 1:** Is "else" required?  
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result:

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
```
  
Will the function work differently if else is removed?

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```
Is there any difference in the behavior of these two variants?  
<br />
  
**Task 2:** Rewrite the function using '?' or '||'  
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result.

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```
Rewrite it, to perform the same, but without if, in a single line.  
Make two variants of checkAge:

1. Using a question mark operator ?
2. Using OR ||
<br />
  
**Task 3:** Function min(a, b)  
Write a function min(a,b) which returns the least of two numbers a and b.
For instance:

```javascript
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```
<br />
  
**Task 4:** Function pow(x, n)  
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

```javascript
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
P.S. In this task the function should support only natural values of n: integers up from 1.