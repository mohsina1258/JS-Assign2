// JavaScript Assignment 2

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var num=prompt("Enter any number","1");
// console.log("The value of num is: ",num);
// ++num;
// console.log("the value of ++num is: ", num);
// console.log("Now the value of num is: ", num);
// console.log("the value of num++ is: ", num);
// num++;
// console.log("the value of num is: ", num);

// --num;
// console.log("the value of --num is: ", num);
// console.log("Now the value of num is: ", num);
// console.log("the value of num-- is: ", num);
// num--;
// console.log("the value of num is: ", num);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//                 1 -   0  + 1 + 1        
// Explain the output at each stage:
// --a; 
// 0
// --a - --b;
// (-1) - (-1)
// --a - --b + ++b;
// (-2) - (-2) + (-1)
// --a - --b + ++b + b--;
// (-3) - (-2) + (-1) + (-1)


// 3. Write a program that takes input a name from user &
// greet the user.

// var userName=prompt("Enter your name ");
// console.log("Hello" + " " + userName )



// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// ALERTS | JAVASCRIPT

// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in console anddoing this without using any function

// Take three subjects' names from the user
// const subject1 = prompt("Enter the name of Subject 1:");
// const subject2 = prompt("Enter the name of Subject 2:");
// const subject3 = prompt("Enter the name of Subject 3:");

// Total marks for each subject
// const totalMarks = 100;

// Take obtained marks for the first subject from the user
// const obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));

// Take obtained marks for the remaining 2 subjects from the user
// const obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
// const obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

// Calculate total obtained marks and percentage
// const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// const percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in the console
// console.log(`Results:
// ${subject1}: Obtained Marks = ${obtainedMarks1}
// ${subject2}: Obtained Marks = ${obtainedMarks2}
// ${subject3}: Obtained Marks = ${obtainedMarks3}
// Total Obtained Marks = ${totalObtainedMarks}
// Percentage = ${percentage.toFixed(2)}%`);


// USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// const cityName = prompt("Enter a city name:");

// if (cityName === "Karachi") {
//     console.log("Welcome to the city of lights!");
// } else {
//     console.log("Welcome to " + cityName);
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// const gender = prompt("Enter your gender (male/female):");

// if (gender === "male") {
//     console.log("Good Morning Sir.");
// } else if (gender === "female") {
//     console.log("Good Morning Ma’am.");
// } else {
//     console.log("Good Morning!");
// }




// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// const signalColor = prompt("Enter the color of the traffic signal (red/yellow/green):");

// if (signalColor === "red") {
//     console.log("Must Stop");
// } else if (signalColor === "yellow") {
//     console.log("Ready to move");
// } else if (signalColor === "green") {
//     console.log("Move now");
// } else {
//     console.log("Invalid color");
// }



// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// const remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (remainingFuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// } else {
//     console.log("You have enough fuel. Keep driving!");
// }



// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// User Input & Conditional Statement | JAVASCRIPT

// Page 2 of 4

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// User Input & Conditional Statement | JAVASCRIPT

// Page 3 of 4

// f. if("car" < "cat"){
// alert("car is smaller than cat");


// Answer
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }




// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// const subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// const subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// const subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// const totalMarks = parseFloat(prompt("Enter total marks:"));

// const totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// const percentage = (totalObtainedMarks / totalMarks) * 100;

// let grade, remarks;

// if (percentage >= 80) {
//     grade = "A+";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "Satisfactory";
// } else if (percentage >= 50) {
//     grade = "C";
//     remarks = "Pass";
// } else {
//     grade = "F";
//     remarks = "Fail";
// }

// console.log(`Total Marks: ${totalMarks}
// Marks Obtained: ${totalObtainedMarks}
// Percentage: ${percentage.toFixed(2)}%
// Grade: ${grade}
// Remarks: ${remarks}`);




// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// // Generate a secret number between 1 and 10
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt user to guess the secret number
// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the guessed number is correct or close enough
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     console.log("Close enough to the correct answer");
// } else {
//     console.log("Sorry, incorrect guess");
// }



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// const number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//     console.log(`${number} is divisible by 3.`);
// } else {
//     console.log(`${number} is not divisible by 3.`);
// }




// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// const number = parseInt(prompt("Enter a number:"));

// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else if (number % 2 === 0) {
//     console.log(`${number} is an even number.`);
// } else {
//     console.log(`${number} is an odd number.`);
// }





// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// const temperature = parseFloat(prompt("Enter the temperature:"));

// if (isNaN(temperature)) {
//     console.log("Invalid input. Please enter a valid temperature.");
// } else if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// } else {
//     console.log("Brrr! It's really cold outside.");
// }



// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// const firstNumber = parseFloat(prompt("Enter the first number:"));
// const secondNumber = parseFloat(prompt("Enter the second number:"));
// const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     console.log("Invalid input. Please enter valid numbers.");
// } else {
//     if (operation === "+") {
//         result = firstNumber + secondNumber;
//     } else if (operation === "-") {
//         result = firstNumber - secondNumber;
//     } else if (operation === "*") {
//         result = firstNumber * secondNumber;
//     } else if (operation === "/") {
//         if (secondNumber !== 0) {
//             result = firstNumber / secondNumber;
//         } else {
//             console.log("Cannot divide by zero.");
//         }
//     } else if (operation === "%") {
//         result = firstNumber % secondNumber;
//     } else {
//         console.log("Invalid operation.");
//     }

//     if (result !== undefined) {
//         console.log(`Result: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
//     }
// }


// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS





// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// const input = prompt("Enter a character:");

// if (input.length !== 1) {
//     console.log("Please enter a single character.");
// } else {
//     const charCode = input.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         console.log(`${input} is a number.`);
//     } else if (charCode >= 65 && charCode <= 90) {
//         console.log(`${input} is an uppercase letter.`);
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log(`${input} is a lowercase letter.`);
//     } else {
//         console.log(`${input} is not a number or a letter.`);
//     }
// }



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// const num1 = parseInt(prompt("Enter the first integer:"));
// const num2 = parseInt(prompt("Enter the second integer:"));

// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Please enter valid integers.");
// } else {
//     if (num1 > num2) {
//         console.log(`${num1} is larger.`);
//     } else if (num2 > num1) {
//         console.log(`${num2} is larger.`);
//     } else {
//         console.log("Both integers are equal.");
//     }
// }



// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// const number = parseFloat(prompt("Enter a number:"));

// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else if (number > 0) {
//     console.log(`${number} is a positive number.`);
// } else if (number < 0) {
//     console.log(`${number} is a negative number.`);
// } else {
//     console.log("The number is zero.");
// }



// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
// const character = prompt("Enter a character:");

// if (character.length !== 1) {
//     console.log("Please enter a single character.");
// } else {
//     const lowerChar = character.toLowerCase();

//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//         console.log(`"${character}" is a vowel.`);
//     } else {
//         console.log(`"${character}" is not a vowel.`);
//     }
// }




// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
// const correctPassword = "mySecretPassword"; // Replace with the actual correct password

// const enteredPassword = prompt("Enter your password:");

// if (enteredPassword === "") {
//     console.log("Please enter your password.");
// } else if (enteredPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }





// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// const time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));

// if (isNaN(time)) {
//     console.log("Invalid input. Please enter a valid time.");
// } else {
//     if (time >= 0 && time < 1200) {
//         console.log("Good morning!");
//     } else if (time >= 1200 && time < 1700) {
//         console.log("Good afternoon!");
//     } else if (time >= 1700 && time < 2100) {
//         console.log("Good evening!");
//     } else if (time >= 2100 && time <= 2359) {
//         console.log("Good night!");
//     } else {
//         console.log("Invalid time. Please enter a valid time in 24-hour format.");
//     }
// }
