// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
/**
sum([1,2,3])
-> 1 + sum([2,3])
-> 1 + 2 + sum([3])
-> 1 + 2 + 3 + sum([])
-> 1 + 2 + 3 + 0
-> 6
 */
const findSum = (arr)=>{
    if (arr.length === 0) {
        return 0
    }
    return arr[0] + findSum(arr.slice(1))
}

console.log(findSum([1,2,3,4,5]));
console.log(findSum([4,8,4,5]));
console.log(findSum([10,20,30]));


/** Alternative way */
// const findSum = (arr,length)=>{
//     if (length == 1) {
//         return arr[0]
//     }
//     return arr[length-1] + findSum(arr,length-1)
// }
// const arr = [1,2,3,4,5]
// console.log(findSum(arr,arr.length));



// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
/*
findMax([1,2,3])
-> Math.max(1 , findMax([2,3]))
-> Math.max(1 , 2 , findMax([3]))
-> Math.max(1 , 2 , 3 , findMax([]))
-> Math.max(1 , 2 , 3 , 0)
-> 3
*/
const findMax = (arr)=>{
    if (arr.length === 0) {
        return 0;
    }
    return Math.max(arr[0], findMax(arr.slice(1)))
}

console.log(findMax([1,2,3,4,5]));
console.log(findMax([5,4,3,2,1]));
console.log(findMax([10,5,8,2,50,90]));