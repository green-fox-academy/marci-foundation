"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.
ctx.fillStyle = "orange";

function drawSquare(x: number, y: number) {
  ctx.fillRect(x, y, 50, 50);
}

drawSquare(10, 20);
drawSquare(67, 230);
drawSquare(188, 196);
