/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Meer Alrafee
      Date:   10/08/24

      Filename: project02-03.js
 */
document.addEventListener("DOMContentLoaded", function() {
let square = document.getElementById("square");
let triangle = document.getElementById("triangle");
let circle = document.getElementById("circle");
let feedback = document.getElementById("feedback");

square.onmouseover = function() {
    feedback.innerHTML="You're hovering over the square";
};

square.onmouseout = function() {
    feedback.innerHTML = "";
};

triangle.onmouseover = function() {
    feedback.innerHTML = "You're hovering over the triangle";
};

triangle.onmouseout = function() {
    feedback.innerHTML = "";
};

circle.onmouseover = function() {
    feedback.innerHTML = "You're hovering over the circle";
};

circle.onmouseout = function() {
    feedback.innerHTML = "";
};
});