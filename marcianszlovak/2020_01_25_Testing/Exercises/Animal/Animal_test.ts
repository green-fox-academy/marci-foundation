"use strict";

import test from "tape";
import Animal from "../../../2019_12_14_Classes/class exercises/animal";

test("someone is eating, drinking...", t => {
  const animal = new Animal();

  animal.eat();
  animal.drink();

  t.equal(animal.hunger, 49, "eating");
  t.equal(animal.thirst, 22, "drinking");
  t.end();
});

test("someone is playing, I wonder who...", t => {});
