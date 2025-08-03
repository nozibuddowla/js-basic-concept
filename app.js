/*
Problem 01:
=============
A seat planner needs to be created for a new cinema hall. The seats in this cinema hall are designed in such a way that if the seat number is divisible by 3 or 5 and there is no remainder, then it will be considered as a 'premium' seat. 

That is, if the seat number is 1, then it will be a normal seat; if the seat number is 3/5, then it will be a premium seat

Problem: Your task is to create a program that will take the total number of seats (totalRows) and, for each seat, it will print whether it is a 'Normal Row' or a 'Premium Row'. Row 1 - Normal Row, Row 4 - Premium Row

ADVANCED: If the seat is normal, then the price will be 500 taka, and if it is a premium seat, then the price will be 800 taka. You need to calculate how much money will be earned in a show, for example: Total Income: 5000 Taka
*/

// let totalRows = 10;
// let premiumSeatCount = 0;
// let normalSeatCount = 0;
// let normalSeatPrice = 500;
// let premiumSeatPrice = 800;

// for (let row = 1; row <= totalRows; row++) {
//     if (row % 3 === 0 || row % 5 === 0) {
//         console.log(`Row ${row} - Premium Row`);
//         premiumSeatCount++;
//     } else {
//         console.log(`Row ${row} - Normal Row`);
//         normalSeatCount++;
//     }
// }

// let totalIncome = (premiumSeatCount * premiumSeatPrice) + (normalSeatCount * normalSeatPrice);
// console.log(`Total Income: ${totalIncome} Taka`);


/*
Problem 02: Product Tagging
=============
You need to write a program for an online store that takes a (string) input (productDescription) and automatically adds some tags (Tags) based on the product details. For example:

details

If the word "cotton" is in the details, then the program output will show "Material: Cotton".

If the word "sale" is in the details, then the program output will show "Category: Sale Item".

If the word "new arrival" is in the details, then the program output will show "Status: New Arrival".

If the word "limited edition" is in the details, then the program output will show "Availability: Limited".

If any condition is not met, then a default tag "Tag: General"

ADVANCED: Handle case insensitively.
*/

// let productDescription = "This is a Limited Edition cotton jacket from our New Arrival collection, now on SALE!";

// let description = productDescription.toLowerCase();

// let tags = [];

// if (description.includes("cotton")) {
//     tags.push("Material: Cotton");
// } else {
//     tags.push("Material: General");
// }

// if (description.includes("sale")) {
//     tags.push("Category: Sale Item");
// } else {
//     tags.push("Category: General");
// }

// if (description.includes("new arrival")) {
//     tags.push("Status: New Arrival");
// } else {
//     tags.push("Status: General");
// }

// if (description.includes("limited edition")) {
//     tags.push("Availability: Limited");
// } else {
//     tags.push("Availability: General");
// }

// console.log(tags.join("\n"));


/*
Problem 03:
=============
A new company, "AlphaCorp", wants to automatically generate a Unique Employee username for their employees to access their database. This username will be based on some personal information about the employee.

You need to write a program that takes an object named employee as input, where the employee information is as follows:
{ firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }

// Output:
username: doe101@alphacorp.com

Rules:
👉 First, the first three letters of lastName will be lowercase.
👉 Then, the employeeId.
👉 Then, the @.
👉 Then, the company name will be lowercase.
👉 Finally, the .com.

ADVANCED: Generate a Temporary Password along with the username.
👉 If lastName is less than three characters, then all the letters of lastName will be used.
👉 for Password generate use firstname last 3 char + # + departmentCode

// Output:
ID: doe101@alphacorp.com, TempPass: jn1#AC
*/ 

const employee = {
    firstName: "Arnob",
    lastName: "Chowdhury",
    employeeId: 101, 
    departmentCode: "Business Executive"
}

const companyName = "AlphaCorp";
let lastThreeChar;
let userName;

if (employee.lastName.length < 3) {
    lastThreeChar = employee.lastName.toLowerCase();
} else {
    lastThreeChar = employee.lastName.slice(0, 3).toLowerCase();
}
userName = `${lastThreeChar}${employee.employeeId}@${companyName.toLowerCase()}.com`;

let password = `${employee.firstName.slice(-3)}#${employee.departmentCode.slice(0, 2).toUpperCase()}`;

console.log(`ID: ${userName}, TempPass: ${password}`);