"use strict";

import fibonacci from "./fibonacci";
import test from "tape";

test("testing the fibonacci sequence", t => {
  const actual = fibonacci(4);
  const expected = 9;

  t.equal(actual, expected);
  t.end();
});
