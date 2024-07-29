
// "Day 3: Control Structures
// Tasks/Activities:

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const num = 10;
if (num === 0) {
    console.log(`Number is ${num}`);
}else if (num > 0) {
    console.log(`Number is positive: ${num}`);
}else{
    console.log(`Number is negative ${num}`);
}
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 18;
if (age >= 18) {
    console.log(`Age is ${num}, and You're eligible to vote`);
}else{
    console.log(`Age is ${num}, and You're Not Eligible to Vote`);
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const num2 = 45;
const num3 = 9;
if (num > num2 && num > num3) {
    console.log("largest :" + num);
}else if( num2 > num3){
    console.log("larges: "+ num2);
}else{
    console.log("largest: "+ num3);
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const YourChoice = 5;
switch (YourChoice){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log( "Thrusday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log( "Saturday");
    break;
    case 7:console.log("Sunday");
    break;
    default: console.log("Invalid Input");
}


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
const score = 80;
switch (true){ // This is something cool suff, You can even put true inside switch and it will evaluate like if else statements!
    case (score < 100 && score >= 90):console.log("Your Grade is: A");
    break;
    case (score < 90 && score >= 70):console.log("Your Grade is: B");
    break;
    case (score < 70 && score >= 50):console.log("Your Grade is: C");
    break;
    case (score < 50 && score >= 30):console.log( "Your Grade is: D");
    break;
    case (score < 30 && score >= 0):console.log("Your Grade is: F" );
    break;
    default: console.log("Invalid Input");
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
(num % 2 === 0) ? console.log("Number is even"): console.log("Number is odd");

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const Year = 1964 || 2000 || 1900 || 2005;
if ((Year % 4 === 0)  && !(Year % 100 === 0)) {
    console.log("Year is Leap Year");
}else if((Year % 100 === 0) && (Year % 400 === 0)){
    console.log("Year is Leap Year");
}else{
    console.log("Year is Not a Leap Year");
}
