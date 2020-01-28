"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.fillStyle = "brown";
let rectangle1 = ctx.fillRect(43, 53, 100, 250);
ctx.fillStyle = "green";
let rectangle2 = ctx.fillRect(65, 342, 32, 230);
ctx.fillStyle = "yellow";
let rectangle3 = ctx.fillRect(230, 65, 87, 99);
ctx.fillStyle = "purple";
let rectangle4 = ctx.fillRect(390, 320, 67, 68);
