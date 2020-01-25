"use strict";

export default function countLetters(dictionary: string) {
  let letterFrequency = {};

  for (let index = 0; index < dictionary.length; index++) {
    const element = dictionary.charAt(index);

    if (letterFrequency[element]) {
      letterFrequency[element]++;
    } else {
      letterFrequency[element] = 1;
    }
    return letterFrequency;
  }
}
