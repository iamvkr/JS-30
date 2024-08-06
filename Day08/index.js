// "Day 8: ES6+ Features
// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let userName = "jagdeep doe";
let age = 42;
console.log(`Hi, ${userName}, Your age is: ${age} `);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multilineStr = `hello line 1
hello line 2
hello line 3`;
console.log(multilineStr);


// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const sampleArr = [1,2,3];
const [first, second, third] = sampleArr;
console.log(first);
console.log(second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title:"Eloquoent Javascript second edition",
    author:"marihn haverbeke",
    year:2014
}
const {title, author} = book;
console.log(`title: ${title} and author: ${author}`);


// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newSampleArr = [...sampleArr, 100,200,300]
console.log(newSampleArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumEverything(...numbers){
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;
}
console.log(sumEverything(1,5,4));
console.log(sumEverything(4,8,6,6,8));


// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function productNum(num1, num2 = 1){
    return num1 * num2;
}
console.log(productNum(40,60));
console.log(productNum(12));


// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const speaker = {
    company: "Jbl",
    watts: 10,
    playMusic(){
        console.log(`${this.company} speaker is playing music..`);
    },
    stopMusic(){
        console.log(`${this.company} speaker stopped playing music..`);
    }
}
console.log(speaker);
console.log(speaker.company);
speaker.playMusic();
speaker.stopMusic();


// Task 9: Create an object with computed property names based on variables and log the object to the console.
let lang1 = 'JS'
let lang2 = 'Java'

let lang = {};
lang['lang1'] = lang1
lang['lang2'] = lang2
console.log(lang);
