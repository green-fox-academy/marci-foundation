const stringMap = {
  "978-1-60309-452-8": "A Letter to Jo",
  "978-1-60309-459-7": "Lupus",
  "978-1-60309-444-3": "Red Panda and Moon Bear",
  "978-1-60309-461-0": "The Lab"
};

for (let [key, value] of Object.entries(stringMap)) {
  console.log(`${value}("ISBN":${key})`);
}

for (const key in stringMap) {
  if (stringMap.hasOwnProperty("978-1-60309-444-3")) {
    delete stringMap["978-1-60309-444-3"];
  }
}
console.log("modifiedString :", stringMap);

delete stringMap["The Lab"];
console.log("stringmap :", stringMap);

/*if (stringMap.hasOwnProperty("The Lab")) {
  delete stringMap["The Lab"];
}
 */


const key = Object.keys(stringMap).find(key => stringMap[key] === "The Lab");
console.log(key);
// function getKeyByValue(object = stringMap, value = value) {
  //  return Object.keys(object).find(key => object[key] === value);
//  }