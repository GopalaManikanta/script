// 1️⃣ Create Student Data
let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]
// 📌 Task 1: Print All Students

console.log(" Task 1: print All Students");

for (let s of students) {
    console.log(s);
    
}

// Use loop and print:
// 1 Naveen 85 MERN
// 2 John 45 Python

for (let i = 0; i < 2; i++) {
 let s = students[i];
 console.log(s.id + " " + s.name + " " + s.mark + " " + s.course);
}

//OUTPUT:
// 1 Naveen 85 MERN
// 2 John 45 Python


// 📌 Task 2: Pass / Fail
// Condition:
// mark >= 50 → Pass
// Below 50 → Fail

console.log("Task 2: Pass / Fail");

for (let s of students){
    if (s.mark >= 50){
    console.log(s.name + " - Pass");
} else if (s.mark <= 50) {
    console.log(s.name + " - Fail");
} else {
    console.log("invalid")
}
}

// Output:
// Naveen - Pass
// John - Fail
// priya - Pass
// Arun - Fail

// 📌 Task 3: Grade System

console.log("Task 3: Grade System");

for (let s of students) {
    if (s.mark >= 90) {
  console.log(s.name + " - A Grade");
 } 
 else if (s.mark >= 75) {
  console.log(s.name + " - B Grade");
 } 
 else if (s.mark >= 50) {
  console.log(s.name + " - C Grade");
 } else {
    console.log(s.name + " - Fail");
 }
}

//OUTPUT:
// Naveen - B Grade
// John - Fail
// Priya - C Grade
// Arun - A Grade

// 90+ = A Grade
// 75+ = B Grade
// 50+ = C Grade
// Below 50 = Fail

// 📌 Task 4: Topper Student
// Find highest mark student.

console.log("Task 4: Topper Student");
let max = 0;
let name = "";
for (let s of students){
    if (s.mark > max) {
        max = s.mark;
        name = s.name;
    }
}
console.log("Topper is "+ name + " - "+ max);



// Output:
// Topper is Arun - 95

// 📌 Task 5: Course Search


console.log("Task 5: Course Search");
for (let s of students){
    if (s.course == "React"){
        console.log(s);
        
    }
}
//OUTPUT:
// If course = React print student details.

// 📌 Task 6: Add New Student
// Add:
// {id:5,name:"Rahul",mark:88,course:"Node JS"}
// Then print all data.

console.log("Task 6: Add New Student");
students.push({id:5,name:"Rahul",mark:88,course:"Node JS"});
for (let s of students){
    console.log(s)
}

//OUTPUT:
// {id: 1, name: 'Naveen', mark: 85, course: 'MERN'}
// {id: 2, name: 'John', mark: 45, course: 'Python'}
// {id: 3, name: 'Priya', mark: 72, course: 'Java'}
// {id: 4, name: 'Arun', mark: 95, course: 'React'}
// {id: 5, name: 'Rahul', mark: 88, course: 'Node JS'}



// 📌 Task 7: Attendance System
// Use switch:
// status = "present"

console.log("Task 7: Attendance System");
let status = "present"
switch (status) {
    case "present":
        console.log("Welcome");
        break;
    case "absent":
        console.log("Mark Absent");
        break;
    case "leave":
        console.log("Approved Leave");
        break;

    default:
        console.log("Invalid");
        
}


// Output:
// present → Welcome
// absent → Mark Absent
// leave → Approved Leave


// 📌 Task 8: Login System
// username = "admin"
// password = "1234"
// If correct:
// Login Success
// Else:
// Invalid User

console.log("Task 8: Login System");
let username = "admin";
let password = "1234";

if (username == "admin" && password == "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
    
}

