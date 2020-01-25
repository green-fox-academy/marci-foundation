"use strict";

import test from "tape";
import Add from "./Sum";

test("sum all numbers from a list", t => {
  const add = new Add();

  let actual = add.sum(3);
  let expected = 5;

  t.equal(actual, expected);
  t.end();
});

test("sum all numbers from a list", t => {
  const add = new Add();

  let actual = add.sum();
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test("sum all numbers from a list", t => {
  const add = new Add();

  let actual = add.sum(5, 78, 2345, 1233412354563657);
  let expected = 32495239847562938475629384756293856;

  t.equal(actual, expected);
  t.end();
});
