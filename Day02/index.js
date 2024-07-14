//A1: Arithemetic operation:
let num1 = 10;
let num2 = 8;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);

//A2: Assignment operator:
console.log(`Old value of num1: ${num1} and num2: ${num2}`);
num1 += 1;
num2 -= 1;
console.log(`New value of num1: ${num1} and num2: ${num2}`);

//A3: Comparision operator:
const age = 21;
console.log(`Age is greater than 18?: ${age > 18}`);
console.log(`Age is less than 18?: ${age < 18}`);

console.log(`Age is greater than or equal 21?: ${age >= 21}`);
console.log(`Age is less than or equal 21?: ${age <= 21}`);

const realNo = 45;
const stringNo = "45";

console.log(`45 == "45"?: ${realNo == stringNo}`);
console.log(`45 === "45"?: ${realNo === stringNo}`);

// A4: Logical operator:
console.log(`(10 > 8) || (8 > 9) = ${(10 > 8) || (8 > 9)}`);
console.log(`(10 > 8) && (8 > 9) = ${(10 > 8) && (8 > 9)}`);

const networkAvailable = true;
console.log(`! of networkAvailable: ${!networkAvailable}`);

// A5:
let number = 14;
(number >= 0)? console.log("Number is positive") : console.log("Number is Negative");
