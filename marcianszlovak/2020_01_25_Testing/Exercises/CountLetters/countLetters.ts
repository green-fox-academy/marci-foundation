"use strict";

export default function count(dictionary: string) {
  let count = {};
  dictionary.split("").forEach(currentItem => {
    count[currentItem] ? count[currentItem]++ : (count[currentItem] = 1);
  });
  return count;
}
