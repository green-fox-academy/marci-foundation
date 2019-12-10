"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawSteps(a: number, b: number, c: number, d: number) {
  ctx.strokeStyle = "black";
  ctx.fillStyle = "purple";
  ctx.strokeRect(a, b, c, d);
  ctx.fillRect(a, b, c, d);
}

let steps = [...new Array(23)];

steps.forEach((index, element) => {
  drawSteps(
    element * element,
    (element * element) / 1.5,
    element + element,
    element + element
  );
});
