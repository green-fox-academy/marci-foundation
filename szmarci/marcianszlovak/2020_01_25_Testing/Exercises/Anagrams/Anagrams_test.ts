"use strict";

import Anagrams from "./Anagrams";
import test from "tape";

test("Is it an anagram?", t => {
  const actual = Anagrams("cat", "cta");
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test("Is THIS an anagram?", t => {
  const actual = Anagrams("no, it's not", "faaös9d8f7fdjfdjdsafnaűáalsdf");
  const expected = true;

  t.equal(actual, expected);
  t.end();
});
