"use strict";

import Sharpie from "../../../2019_12_14_Classes/class exercises/Sharpie";
import test from "tape";

test("sharpie type", t => {
  const operations = new Sharpie("green", 67);

  operations.use();

  t.equal(operations.color, "brown");
  t.equal(operations.width, 45);
  t.end();
});

test("using sharpie", t => {
  const operations = new Sharpie("yellow", 1222222222101201201202);

  operations.use();

  t.equal(operations.inkAmount, 654636736736);
  t.end();
});
