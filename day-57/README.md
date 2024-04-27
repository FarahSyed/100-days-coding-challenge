# Day-57 Task

## Description
This task involves reading the following articles and coding along with them:
- [Comparisons in JavaScript](https://javascript.info/comparison)
- [Conditional Operators: if, '?'(Ternary Operator) in JavaScript](https://javascript.info/ifelse)

## Coding Tasks

### Comparisons:

**Task 1:** What will be the result for these expressions?
- 5 > 4
- "apple" > "pineapple"
- "2" > "12"
- undefined == null
- undefined === null
- null == "\n0\n"
- null === +"\n0\n"
<br />
  
### Conditional Branching: if, '?':

**Task 1:** if (a string with zero)  
Will alert be shown?
```javascript
if ("0") {
  alert('Hello');
}
```  
<br />
  
**Task 2:** The name of JavaScript
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’  
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”  
  
<br />
  
**Task 3:** Show the sign  
Using if..else, write the code which gets a number via prompt and then shows in alert:  
  
1, if the value is greater than zero,  
-1, if less than zero,  
0, if equals zero.  
In this task we assume that the input is always a number.  
<br />
  
**Task 4:** Rewrite 'if' into '?'  
Rewrite this if using the conditional operator '?':  
  
```javascript
let result;  
  
if (a + b < 4) {  
  result = 'Below';  
} else {  
  result = 'Over';  
}  
```
<br />
  
**Task 5:** Rewrite 'if..else' into '?'  
Rewrite if..else using multiple ternary operators '?'.  
For readability, it’s recommended to split the code into multiple lines.  
  
```javascript
let message;  
  
if (login == 'Employee') {  
  message = 'Hello';  
} else if (login == 'Director') {  
  message = 'Greetings';  
} else if (login == '') {  
  message = 'No login';  
} else {  
  message = '';  
}
```