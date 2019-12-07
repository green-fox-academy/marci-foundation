"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function coloredSquare(a: number, b: string) {
  ctx.strokeStyle = b;
  ctx.strokeRect(300, 200, a, a);
}
/* ctx.fillStyle = "blue";
ctx.fillRect(0, 20, canvas.width, canvas.height); */

let colors1 = [...new Array(7)];

colors1.forEach(element => {
  coloredSquare(40, "green");
});
