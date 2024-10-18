/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Meer Alrafee
      Date: 10/14/24

      Filename: project02-04.js
 */
 
const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, SALAD_PRICE = 7.95, SALES_TAX = 0.07


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 document.addEventListener("DOMContentLoaded", function() {
 document.getElementById('calculate').addEventListener('click', calcTotal);
 function calcTotal() {
   var cost = 0;


   const buyChicken = document.getElementById('chicken').checked;
   const buyHalibut = document.getElementById('halibut').checked;
   const buyBurger = document.getElementById('burger').checked;
   const buySalmon = document.getElementById('salmon').checked;
   const buySalad = document.getElementById('salad').checked;

   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

   const tax = cost * SALES_TAX;

   document.getElementById('foodTax').innerHTML = formatCurrency(tax);

   const totalCost = cost + tax;

   document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);
}

document.getElementById('chicken').addEventListener('click', calcTotal);
document.getElementById('halibut').addEventListener('click', calcTotal);
document.getElementById('burger').addEventListener('click', calcTotal);
document.getElementById('salmon').addEventListener('click', calcTotal);
document.getElementById('salad').addEventListener('click', calcTotal);
});
