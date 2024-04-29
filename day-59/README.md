# Day-59 Task:

## Description
Read the following Articles and Code along with it:

- [Loops: while and for in JavaScript](https://javascript.info/while-for)
- [The "switch" statement in JavaScript](https://javascript.info/switch)

## Coding Tasks

### Loops:

**Task 1:** Last loop value  
What is the last value alerted by this code? Why?

```javascript
let i = 3;

while (i) {
  alert( i-- );
}
```
<br />
  
**Task 2:** Which values does the while loop show?  
For every loop iteration, write down which value it outputs and then compare it with the solution.
Both loops alert the same values, or not?

1. The prefix form ++i:

```javascript
let i = 0;
while (++i < 5) alert( i );
```
2. The postfix form i++

```javascript
let i = 0;
while (i++ < 5) alert( i );
```
<br />
  
**Task 3:** Which values get shown by the "for" loop?  
For each loop write down which values it is going to show. Then compare with the answer.
Both loops alert same values or not?

1. The postfix form:

```javascript
for (let i = 0; i < 5; i++) alert( i );
```
2. The prefix form:

```javascript
for (let i = 0; i < 5; ++i) alert( i );
```
<br />
  
**Task 4:** Output even numbers in the loop  
Use the for loop to output even numbers from 2 to 10.  
<br />
  
**Task 5:** Replace "for" with "while"  
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

```javascript
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```
<br />
  
**Task 6:** Repeat until the input is correct  
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.  
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.  
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.  
<br />
  
**Task 7:** Output prime numbers  
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.  
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.  
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.  
**Write the code which outputs prime numbers in the interval from 2 to n.**  
For n = 10 the result will be 2,3,5,7.  
P.S. The code should work for any n, not be hard-tuned for any fixed value.


### Switch:
**Task 1:** Rewrite the "switch" into an "if"  
Write the code using if..else which would correspond to the following switch:

```javascript
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```
<br />
  
**Task 2:** Rewrite "if" into "switch"  
Rewrite the code below using a single switch statement:

```javascript
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
```