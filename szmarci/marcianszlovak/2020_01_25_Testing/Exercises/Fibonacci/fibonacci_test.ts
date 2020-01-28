"use strict";

import fibonacci from "./fibonacci";
import test from "tape";

test("testing the fibonacci sequence", t => {
  const actual = fibonacci(10); // 11th element of the fibonacci sequence
  const expected = 55;

  t.equal(actual, expected);
  t.end();
});
