"use strict";

export default function countLetters(dictionary: string) {
  if (dictionary === undefined) {
    return undefined;
  } else {
    let letters = {};

    for (let index = 0; index < dictionary.length; index++) {
      let modifiedLetters = dictionary.charAt(index).toUpperCase();

      if (letters[modifiedLetters]) {
        letters[modifiedLetters]++;
      } else {
        letters[modifiedLetters] = 1;
      }
    }
    return letters;
  }
}
