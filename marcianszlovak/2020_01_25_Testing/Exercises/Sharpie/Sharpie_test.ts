"use strict";

import Sharpie from "../../../2019_12_14_Classes/class exercises/sharpie";
import test from "tape";

test("sharpie type", t => {
  const operations = new Sharpie("green", 67);
  operations.use();
  t.equal(operations.color, "brown");
  t.equal(operations.width, 45);
  t.end();
});
