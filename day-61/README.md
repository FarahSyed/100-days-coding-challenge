# Day-61 Task:

## Description
Read the following Articles and Code along with it:

- [Arrow functions Basics in JavaScript](https://javascript.info/arrow-functions-basics)
- [JavaScript specials in JavaScript](https://javascript.info/javascript-specials)

## Coding Tasks

### Arrow functions basics:

**Task 1:** Rewrite with arrow functions  
Replace Function Expressions with arrow functions in the code below:

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```