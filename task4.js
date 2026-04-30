// LEVEL 1 (Basic Practice)
// 🔹 Task 1: Array Basics
// let arr = [10, 20, 30, 40, 50];
// 👉 Print:
// First element
// Last element
// Total length

let arr = [10, 20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[arr.length-1]);
console.log(arr.length);




// 🔹 Task 2: Push & Pop
// let arr = [1,2,3];
// 👉 Add 4,5 at end
// 👉 Remove last element
// 👉 Final output should be: [1,2,3,4]

let arr1 = [1,2,3];
arr1.push(4,5)
arr1.pop()

console.log(arr1);



// 🔹 Task 3: Includes Check
// 👉 Check if "javascript" exists in:
// let arr = ["html","css","javascript","react"];

let arr2 = ["html","css","javascript","react"];
console.log(arr2.includes("javascript"));





// 🥋 LEVEL 2 (Intermediate)
// 🔹 Task 4: Filter Salaries
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:30000}
// ];
// 👉 Get employees with salary greater than 20000

let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
]

let checkSalary = emp.filter((c,i,t)=>{

    return c.salary > 20000

})

console.log(checkSalary);

//OUTPUT:-
//   {name:"B", salary:50000},
//   {name:"C", salary:30000}



// 🔹 Task 5: Map Names
// 👉 From above array, return only:
// ["A","B","C"]


let names = emp.map((c,i,t)=>{

    return c.name
   
})

console.log(names);

//OUTPUT:- ["A","B","C"]


// 🔹 Task 6: Reduce Sum
// 👉 Find total salary using reduce()

let calAllSalary = emp.reduce((acc,c,i,t)=>{
    return acc + c.salary
},0)
console.log(calAllSalary);

//OUTPUT:- 90000




// 🥋 LEVEL 3 (Logic Building)
// 🔹 Task 7: Remove Duplicates
// let arr = [1,2,2,3,4,4,5];
// 👉 Output: [1,2,3,4,5]

let arr3 = [1,2,2,3,4,4,5];

let Duplicates = [...new Set(arr3)];

console.log(Duplicates);



// 🔹 Task 8: Find Largest Number
// let arr = [10, 200, 5, 90];
// 👉 Output: 200

let arr4 = [10, 200, 5, 90];

console.log(Math.max(...arr4));


// 🔹 Task 9: Reverse String WITHOUT reverse()
// let str = "hello";
// 👉 Output: "olleh"

let str = "hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}

console.log(reverse);





// 🥋 LEVEL 4 (Advanced Thinking)
// 🔹 Task 10: Group by Salary
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:10000}
// ];
// 👉 Output:
// {
//   10000: ["A","C"],
//   50000: ["B"]
// }

let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
]

let Final = {};

for (let e of emp1) {
  Final[e.salary] = Final[e.salary] || [];
  Final[e.salary].push(e.name);
}

console.log(Final);




// 🔹 Task 11: Flatten Array (without flat)
// let arr = [1,[2,[3,[4]]]];
// 👉 Output: [1,2,3,4]


let arr5 = [1,[2,[3,[4]]]];

let results = arr5.toString();

console.log(results);



// 🔹 Task 12: Custom Sort (Descending)
// let arr = [5,2,9,1];
// 👉 Output: [9,5,2,1]
// 🥋 BONUS (Interview Level 🔥)

let arr6 = [5,2,9,1];

let sortVal = arr6.sort((a,b)=>{
    return b-a
})
console.log(sortVal);

// Output: [9,5,2,1]


// 🔹 Task 13: Find Second Largest
// let arr = [10, 50, 20, 40];
// 👉 Output: 40


let arr7 = [10, 50, 20, 40];

arr7.sort((a, b) => b - a);

console.log(arr7[1]);



// 🔹 Task 14: Count Characters
// let str = "aabbccdde";
// 👉 Output:
// {a:2, b:2, c:2, d:2, e:1}


let str2 = "aabbccdde";
let result = {};

for (let ch of str2) {
  result[ch] = (result[ch] || 0) + 1;
}

console.log(result);