"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let blocksOne = [...new Array(10)];
let blocksTwo = [...new Array(10)];
blocksOne.forEach((index, element) => {
  blocksTwo.forEach((index2, element2) => {
    ctx.beginPath();
    ctx.fillStyle = ["black", "white"][(element + element2) % 2];
    ctx.fillRect(element2 * 67, element * 67, 67, 67);
    ctx.closePath();
  });
});
