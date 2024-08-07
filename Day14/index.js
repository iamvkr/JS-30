// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor() {
        this.name = "Sam";
        this.age = 21;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const p1 = new Person();
console.log(p1.name);
console.log(p1.age);
p1.greet();

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person2 {
    constructor() {
        this.name = "Sam";
        this.age = 18;
    }

    updateAge(age) {
        this.age = age;
        console.log(`${this.name} updated age is: ${this.age}`);
    }
}
const p2 = new Person2();
p2.updateAge(22);


// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    constructor() {
        super();
        this.studentID = 10;
    }
    getStudentId() {
        return this.studentID;
    }
}

const s1 = new Student();
console.log("student Id:", s1.getStudentId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Student2 extends Person {
    constructor() {
        super();
        this.name = "Sam";
        this.age = 21;
        this.studentID = 10;
    }

    getStudentId() {
        return this.studentID;
    }
    greet() {
        console.log(`Hello student ${this.name}`);
    }
}

const s2 = new Student2();
s2.greet()



// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person3 {
    constructor() {
        this.name = "Sam";
        this.age = 21;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

    static welcome() {
        console.log("Welcome to Person 3 class");
    }
}
Person3.welcome();

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student3 extends Person {
    static totalStd = 0;
    constructor() {
        super();
        this.name = "Sam";
        this.age = 21;
        this.studentID = 10;
        // as the constructor is called, increment totalStd
        Student3.totalStd++;
    }

    getStudentId() {
        return this.studentID;
    }
    greet() {
        console.log(`Hello student ${this.name}`);
    }
}

const s3 = new Student3();
const s4 = new Student3();
console.log("Total Students created:", Student3.totalStd);


// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Person4 {
    constructor() {
        this.firtsName = "Sam";
        this.lastName = "johnsan";
    }

    get fullname() {
        return `${this.firtsName} ${this.lastName}`
    }
}
const p4 = new Person4();
console.log(p4.fullname);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
class Person5 {
    constructor() {
        this.firtsName = "Sam";
        this.lastName = "johnsan";
    }

    get fullname() {
        return `${this.firtsName} ${this.lastName}`
    }

    set fullname({ firstName, lastName }) {
        this.firtsName = firstName;
        this.lastName = lastName
    }
}
const p5 = new Person5();
p5.fullname = {
    firstName: "John",
    lastName: "Doe"
};
console.log(p5.fullname);


// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;
    constructor() {
        this.#balance = 100;
    }
    deposit(balance) {
        this.#balance += balance
    }
    withdraw(balance) {
        this.#balance -= balance
    }
    viewBalance(){
        console.log("Blanace Remaining:", this.#balance);
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const a1 = new Account();
a1.deposit(200);
a1.viewBalance();
a1.withdraw(120);
a1.viewBalance();
// console.log(a1.balance); ==> undefined 
// console.log(a1.#balance); ==> Property '#balance' is not accessible outside class 'Account' because it has a private 

