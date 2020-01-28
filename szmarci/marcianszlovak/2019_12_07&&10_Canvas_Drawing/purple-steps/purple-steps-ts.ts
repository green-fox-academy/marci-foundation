"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawSteps(x: number, y: number) {
  ctx.strokeStyle = "black";
  ctx.fillStyle = "purple";
  ctx.strokeRect(x, y, 40, 40);
  ctx.fillRect(x, y, 40, 40);
}

let steps = [...new Array(250)];

steps.forEach(function(index, item) {
  // solution 1 without arrow forEach
  if (item % 40 === 0) {
    drawSteps(item, item);
  }
});

steps.forEach((index, element) => {
  // solution 2 with arrow forEach
  if (element % 40 === 0) {
    drawSteps(element, element);
  }
});
