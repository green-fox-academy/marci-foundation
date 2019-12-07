"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 100, 100);
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.lineWidth = 10;
ctx.moveTo(0, 100); // height, width start
ctx.lineTo(100, 100); // height, width end
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.lineWidth = 10;
ctx.moveTo(100, 0); // height, width start
ctx.lineTo(100, 105); // height, width end
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.lineWidth = 15;
ctx.moveTo(0, 0); // height, width start
ctx.lineTo(0, 105); // height, width end
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.lineWidth = 15;
ctx.moveTo(0, 0); // height, width start
ctx.lineTo(100, 0); // height, width end
ctx.stroke();
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
