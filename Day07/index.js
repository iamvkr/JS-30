// "Day 7: Objects
// Tasks/Activities:

// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title:"Learn Js",
    author:"k.kumar",
    year:2014
}
console.log(book);
// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);


// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book2 = {
    title:"Learn Js",
    author:"k.kumar",
    year:2014,
    bookDetails: function(){
        return `${this.title}, ${this.author}`;
    }
}
console.log(book2);
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book2.setYear = function(year){
    this.year = year;
}
book2.setYear(2011);
console.log("Book New Year:",book2.year);



// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name:"My Books Library",
    books:[
        {
            title:"Eloquoent Javascript second edition",
            author:"marihn haverbeke",
            year:2014
        },
        {
            title:"Eloquoent Javascript third edition",
            author:"marihn haverbeke",
            year:2018
        },
    ]
}
console.log(library);
// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach(book => {
    console.log(book.title);
});

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
const book3 = {
    title:"Learn Js",
    author:"k.kumar",
    year:2014,
}
book3.getDetails = function(){
    return `Title :${this.title} \nYear: ${this.year}`;
}
console.log(book3.getDetails());


// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`${key} ==> ${book[key]}`);
}
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book)); //[ 'title', 'author', 'year' ]
console.log(Object.values(book)); //[ 'Learn Js', 'k.kumar', 2014 ]