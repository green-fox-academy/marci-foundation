"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawRbox(squareSize: number) {
  while (squareSize >= 0) { // while the size of the square is equal or greater than zero fill it with colors
    ctx.fillStyle =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    ctx.fillRect(
      (canvas.width - squareSize) / 2,
      (canvas.height - squareSize) / 2,  // center the square
      squareSize,
      squareSize
    );
    squareSize = squareSize - 30; // 
  }
}
let squareSize = 600; // 600 so it fills the whole canvas
drawRbox(squareSize);
