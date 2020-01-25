"use strict";

import countLetters from "./countLetters";
import test from "tape";

test("Counting letters", t => {
  const actual = countLetters("supreme");
  const expected = 2;
  t.equal(actual, expected);
  t.end();
});
