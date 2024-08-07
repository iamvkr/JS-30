// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch (arr,element,low=0,high=(arr.length-1)){
    const mid = Math.floor((low + high)/2);
    console.log(mid);
    if (arr[mid] === element) {
        return mid;
    }
    if (element > arr[mid]) {
        low = mid + 1;
    }else{
        high = mid - 1;
    }
    return binarySearch(arr,element,low,high);
}
// console.log("Found element at index:",binarySearch([2,3,5,6,8,9],8));
// console.log("Found element at index:",binarySearch([2,3,5,6,8,9],2));
// console.log("Found element at index:",binarySearch([2,3,5,6,8,9],9));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countElem (arr,element,low=0,high=(arr.length-1)){
    if (low > high) {
        return 0;
    }
    if (arr[low] == element) { 
        low++;
        return 1 + countElem(arr,element,low,high)
    }
    low++;
    return countElem(arr,element,low,high)
}
console.log("element present times:",countElem([2,8,5,2,8,3],3));