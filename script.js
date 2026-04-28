// // 🔹 Task 1: Variable Update
// Create a variable using var with value 50.
// Change it to 100 and print final value in console.

var a=50;
    a=100;
    console.log(a);


// 🔹 Task 2: Let Variable Math
// Create let marks = 80
// Add 10 marks and print result.

let math=80;
    mark=math+10;
    console.log(mark);


// 🔹 Task 3: Const Value
// Create const price = 500
// Create another variable finalPrice = price + 100
// Print finalPrice

const price=500;
const finalPrice=price + 100;
console.log(finalPrice);

// 🔹 Task 4: Printing Statements
// Print the following in console:
// "Welcome Team"
// 2026
// true

console.log("welcome Team");
console.log(2026);
console.log(true);




// 🔹 Task 5: Datatype Check
// Check datatype of:
// "JavaScript"
// 250
// false
// Use typeof

console.log(typeof("JavaScript"));
console.log(typeof(250));
console.log(typeof(false));


// 🔹 Task 6: Array Task
// Create array with 5 fruits.
// Print:
// Full array
// First fruit
// Last fruit

let fruits = ["Apple","banana","cherry","graphs","mango","orange"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


// 🔹 Task 7: Object Task
// Create object:
// student = {
//  name: "Naveen",
//  age: 20,
//  course: "MERN"
// }
// Print:
// name
// age

let student = {
    name: "Manikanta",
    age: 22,
    course: "Front End Developer"
}
console.log(student.name);
console.log(student.age);


// 🔹 Task 8: Arithmetic Operators
// Print result:
// 20 + 10
// 50 - 25
// 5 * 5
// 100 / 4
// 20 % 3

console.log(20 + 10);
console.log(50 - 25);
console.log(5 * 5);
console.log(100 / 4);
console.log(20 % 3);


// 🔹 Task 9: Increment / Decrement
// let x = 5;
// x++;
// console.log(x);
// Then:
// let y = 10;
// y--;
// console.log(y);

let x = 5;
x++;
console.log(x);
let y = 10;
y--;
console.log(y);


// 🔹 Task 10: Comparison Operators
// Print answers:
// 10 > 5
// 5 < 2
// 20 == "20"
// 15 === "15"
// 10 != 8

console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);


// 🔹 Task 11: Logical Operators
// Print result:
// 5 > 2 && 10 > 3
// 7 < 5 || 8 > 2
// !(10 > 5)

console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));

// 🔹 Task 12: Ternary Operator
// Check age:
// let age = 18;
// If age >= 18 print "Eligible" else "Not Eligible"

let age = 18;
age >= 18? console.log("Eligible") : console.log("Not Eligible");

