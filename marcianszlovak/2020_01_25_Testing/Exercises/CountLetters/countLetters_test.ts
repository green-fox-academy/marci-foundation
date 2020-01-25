"use strict";

import countLetters from "./countLetters";
import test from "tape";

let a: string = "supreme";
test("Counting letters in a string", t => {
  const actual = countLetters(a);
  const expected = { e: 2 };

  t.deepEqual(actual, expected);
  t.end();
});
