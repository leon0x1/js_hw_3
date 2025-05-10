'use-strict'

/*
מגישים:
ליאון מברין
יאלים סאלם
*/

//Array - Methods:

//HW.Task #5:
console.log(`\nTas #5 output:`);

const fruits = ["apple", "banana", "cherry", "date"];

fruits.splice(1, 1, "blueberry", "blackberry");

console.log(fruits)

//HW.Task #6:
console.log(`\nTas #6 output:`);

const colors = ["red", "orange", "yellow", "green", "blue"];

let t6 = colors.slice(1, 3);

console.log(t6)

//HW.Task #7:
console.log(`\nTas #7 output:`);

const animals1 = ["cat", "dog"];
const animals2 = ["lion", "tiger"];

let hw7 = animals1.concat(animals2);

console.log(hw7);

//HW.Task #8:
console.log(`\nTas #8 output:`);

const numbers = [7, 3, 9, 1, 5];

numbers.sort();

console.log(numbers);

//HW.Task #9:
console.log(`\nTas #9 output:`);

const letters = ["a", "b", "c", "d"];

letters.reverse(letters)

console.log(letters);

//HW.Task #10:
console.log(`\nTas #10 output:`);

const sentence = "JavaScript is awesome";

let hw10 = sentence.split(" ");

console.log(hw10);

//HW.Task #11:
console.log(`\nTas #11 output:`);

const words = ["Hello", "world"];

let hw11 = words.join(" ");

console.log(hw11);

//HW.Task #14:
console.log(`\nTas #14 output:`);

const students = ["דני", "נועה", "רן", "תמר"];

students.forEach(function (e) {
  console.log(`שלום, ${e}! בהצלחה במבחן!`)
});


//HW.Task #15:
console.log(`\nTas #15 output:`);

const pricesILS = [100, 250, 75, 320];
// תוצאה: [28.57, 71.43, 21.43, 91.43]

let pricesUSD = pricesILS.map(function (e) {
  return (e / 3.5);
});

pricesUSD.forEach(function (e) {
  console.log(e);
});


//HW.Task #16:
console.log(`\nTas #16 output:`);

const users = [
  { username: "Tom", isLoggedIn: true },
  { username: "Jerry", isLoggedIn: false },
  { username: "Spike", isLoggedIn: true }
];

const loggedUsers = users.filter(function (user) {
  return user.isLoggedIn === true;
});

console.log(loggedUsers);


//HW.Task #17:
console.log(`\nTas #17 output:`);

const products = [
  { name: "Book", quantity: 3 },
  { name: "Pen", quantity: 0 },
  { name: "Notebook", quantity: 5 }
];

let hw17 = products.some(function (product) {
  return product.quantity === 0;
})

console.log(hw17);


//HW.Task #18:
console.log(`\nTas #18 output:`);

const grades = [72, 85, 90, 67, 58];
// במקרה הזה - צריך להחזיר false

let hw18 = grades.every(function (grade) {
  return grade >= 60;
})

console.log(hw18);



//HW.Task #19:
console.log(`\nTas #19 output:`);

const employees = [
  { name: "Sharon", salary: 9500 },
  { name: "David", salary: 7800 },
  { name: "Lior", salary: 12000 }
];
// תוצאה: ["SHARON", "LIOR"]


let hw19 = employees.filter(function (e) {
  return e.salary > 8000;
}).map(function (e) {
  return e.name.toUpperCase();
});

console.log(hw19);

//HW.Task #20:
console.log(`\nTas #20 output:`);

const books = [
  { title: "Book A", pages: 450 },
  { title: "Book B", pages: 520 },
  { title: "Book C", pages: 600 }
];

if (books.some(book => book.pages > 500)) {
  let hw20 = books.filter(book => book.pages > 500);
  console.log(hw20);
}