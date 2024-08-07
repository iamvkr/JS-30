// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
const complexCalc = () => {
    const cachedResults = {};
    const readFileWithMemo = (a) => {
        if (cachedResults[a]) { //find if cached result exist
            console.log("Cached result: ",cachedResults[a]);
            return false;
        }
        setTimeout(() => {
            console.log("complex calculation result: ",a);
            cachedResults[a] = a;
        }, 3000);
    }
    return {readFileWithMemo};
}
const rf = complexCalc();
console.log(rf);
rf.readFileWithMemo("sample"); //will take 3 second to execute

setTimeout(() => {
    rf.readFileWithMemo("sample"); // when next time called, will give result immediately
}, 5000); 

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
const factorial = ()=>{
    const cached = {};
    const calcFactorial = (num)=>{
        if (cached[num]) {
            return cached[num]
        }
        let f = 1;
        for (let i = 1; i <= num; i++) {
            f *= i;
        }
        cached[num] = f;
        return f;
    }
    return calcFactorial;
}

const fact = factorial();
console.log(fact(5));
console.log(fact(5));
