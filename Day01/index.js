// Activity 1

var price = 180;
console.log(`price is:${price}`);

let title = "Apple AirPods Max Silver";
console.log(`Product name:${title}`);

// Activity 2
const productInStock = true;
console.log(`Product in stock:${productInStock}`);

// Activity 3
const userId = 1;
const firstName =  "Emily";
const isLogin = true;
const languages = ["JS","C++","JAVA"];
const address = {
    city:"Jaipur",
    state:"Rajasthan",
    coordinates:{
        lat:"71.814525",
        lng:"-161.150263"
    }
}

console.table([
    ["userId: ",userId, typeof(userId)],
    ["firstName: ",firstName, typeof(firstName)],
    ["isLogin: ",isLogin, typeof(isLogin)],
    ["languages: ",languages, typeof(languages)],
    ["address: ",address, typeof(address)],
])

// Activity 4:
let fruit = "Mango";
console.log(`fruit is: ${fruit}`);
fruit = "guava";
console.log(`fruit is: ${fruit}`);

// Activity 5:
const PORT = 8080;
PORT = 3000;
// TypeError: Assignment to constant variable.

