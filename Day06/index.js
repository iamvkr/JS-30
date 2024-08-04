// 'Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("First element:", arr[0]);
console.log("Last element:", arr[(arr.length) - 1]);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(7);
console.log(arr);
// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);
// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);
// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(0);
console.log(arr);


// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let newArr = arr.map((num, i) => (num * 2));
console.log(newArr);
// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const newArr2 = arr.filter((num, i) => (num % 2 === 0));
console.log(newArr2);
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const ArrSum = arr.reduce((prev, current) => { return (prev + current) }, 0);
console.log(ArrSum);


// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
const fruits = ["mango", "apple", "papaya", "orange"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
fruits.forEach(fruit => {
    console.log(fruit);
});


// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
]
console.log(matrix);
// Task 13: Access and log a specific element from the two-dimensional array.
console.log("element at (1,1) = ", matrix[1][1]);
