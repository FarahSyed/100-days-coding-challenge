**Day-56 Task:**  
  
Read the following Articles and Code along with it:  
  
[Type Conversions in JavaScript](https://javascript.info/type-conversions)  
  
[Operators in JavaScript](https://javascript.info/operators)  
  
  
**Basic Operators, Maths Tasks:**  
1. The postfix and prefix forms  
What are the final values of all variables a, b, c and d after the code below?  
  
let a = 1, b = 1;  
  
let c = ++a; // ?  
let d = b++; // ?  
  
2. Assignment result  
What are the values of a and x after the code below?  
  
let a = 2;  
let x = 1 + (a *= 2);  
  
3. Type conversions  
What are results of these expressions?  
  
"" + 1 + 0  
"" - 1 + 0  
true + false  
6 / "3"  
"2" * "3"  
4 + 5 + "px"  
"$" + 4 + 5  
"4" - 2  
"4px" - 2  
"  -9  " + 5  
"  -9  " - 5  
null + 1  
undefined + 1  
" \t \n" - 2  
Think well, write down and then compare with the answer.  
  
4. Fix the addition  
Here’s a code that asks the user for two numbers and shows their sum.  
  
It works incorrectly. The output in the example below is 12 (for default prompt values).  
  
Why? Fix it. The result should be 3.  
  
let a = prompt("First number?", 1);  
let b = prompt("Second number?", 2);  
  
alert(a + b); // 12