"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
ctx.fillStyle = "purple";

function oneSquare(a: number) {
  ctx.fillRect(300, 200, a, a);
}

let squares = [12, 42, 72];

squares.forEach(element => {
  oneSquare(element);
});
