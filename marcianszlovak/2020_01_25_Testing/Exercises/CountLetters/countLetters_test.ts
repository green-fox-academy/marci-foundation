"use strict";

import countLetters from "./countLetters";
import test from "tape";

test("Counting letters in a string", t => {
  const actual = countLetters("supreme");
  const expected = { e: 2 };

  t.equal(actual, expected);
  t.end();
});
