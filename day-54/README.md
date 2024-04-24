**Day-54 Task:**

Read the following Articles and Code along with it:

[Hello World](https://javascript.info/hello-world)
[Variables](https://javascript.info/variables)


**Hello World Tasks:**
1. Show an alert
Create a page that shows a message “I’m JavaScript!”.
Do it in a sandbox, or on your hard drive, doesn’t matter, just ensure that it works.

2. Show an alert with an external script
Take the solution of the previous task Show an alert. Modify it by extracting the script content into an external file alert.js, residing in the same folder.
Open the page, ensure that the alert works.


**Variables Tasks**
1. Working with variables
i. Declare two variables: admin and name.
ii. Assign the value "John" to name.
iii. Copy the value from name to admin.
iv. Show the value of admin using alert (must output “John”).

2. Giving the right name
i. Create a variable with the name of our planet. How would you name such a variable?
ii. Create a variable to store the name of a current visitor to a website. How would you name that variable?

3. Uppercase const?
i. Examine the following code:

const birthday = '18.04.1982';
const age = someCode(birthday);

Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?