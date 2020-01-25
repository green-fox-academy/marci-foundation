"use strict";

export default function fibonacci(a: number) {
  if (a < 2) {
    return a;
  }
  return fibonacci(a - 1) + fibonacci(a - 2);
}
