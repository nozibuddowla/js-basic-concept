/*
Problem 01:
=============
A seat planner needs to be created for a new cinema hall. The seats in this cinema hall are designed in such a way that if the seat number is divisible by 3 or 5 and there is no remainder, then it will be considered as a 'premium' seat. 

That is, if the seat number is 1, then it will be a normal seat; if the seat number is 3/5, then it will be a premium seat

Problem: Your task is to create a program that will take the total number of seats (totalRows) and, for each seat, it will print whether it is a 'Normal Row' or a 'Premium Row'. Row 1 - Normal Row, Row 4 - Premium Row

ADVANCED: If the seat is normal, then the price will be 500 taka, and if it is a premium seat, then the price will be 800 taka. You need to calculate how much money will be earned in a show, for example: Total Income: 5000 Taka
*/

let totalRows = 10;
let premiumSeatCount = 0;
let normalSeatCount = 0;
let normalSeatPrice = 500;
let premiumSeatPrice = 800;

for (let row = 1; row <= totalRows; row++) {
    if (row % 3 === 0 || row % 5 === 0) {
        console.log(`Row ${row} - Premium Row`);
        premiumSeatCount++;
    } else {
        console.log(`Row ${row} - Normal Row`);
        normalSeatCount++;
    }
}

let totalIncome = (premiumSeatCount * premiumSeatPrice) + (normalSeatCount * normalSeatPrice);
console.log(`Total Income: ${totalIncome} Taka`);
