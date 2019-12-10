"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

function horizontalLine(x: number, y: number) {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 50);
  ctx.stroke();
}

horizontalLine(200, 340);
horizontalLine(260, 350);
horizontalLine(110, 450);

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.
