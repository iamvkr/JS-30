// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import axios from "axios";
// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import pkg from "lodash";
const { compact } = pkg;

const arr = [0, 1, false, 2, '', 3]
const newArr = compact(arr); //removes all falsy values
console.log(newArr);

  async function getProduct(productId) {
    // Validate productId to ensure it's a valid path (e.g., using a regular expression)
    if (!/^\d+$/.test(productId)) {
        throw new Error('Invalid product ID');
    }

    try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getProduct(1)