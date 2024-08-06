// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const pm = new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
})
pm.then(data => console.log(data))

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const getData = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json(url);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getData('https://dummyjson.com/products/1');