// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const address = {
    city:"Abc",
    State:"Punjab",
    country:"India"
}

const user = {
    name:"iamvkr",
    langages:['js','html','css'],
    address
}

const music = {
    name:"dance monkey",
    length:"2 min 30 sec",
    play:()=>{
        console.log(`${user.name} started Playing...`);
    },
    stop:()=>{
        console.log(`${user.name} stopped Playing...`);
    }
}

export default {address, user, music}