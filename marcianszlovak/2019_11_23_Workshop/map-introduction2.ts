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

for (const key in stringMap) {
  if (stringMap[key] === "The Lab") {
    delete stringMap[key];
  }
}

const key = Object.keys(stringMap).find(key => stringMap[key] === "The Lab");
if (key === undefined) {
  console.log("disappeared");
}

Object.assign(stringMap, {
  "978-1-60309-450-4": "They Called Us Enemy",
  "978-1-60309-453-5": "Why Did We Trust Him?"
});

console.log(stringMap["478-0-61159-424-8"], stringMap["978-1-60309-453-5"]);
if (stringMap["478-0-61159-424-8"] === undefined || false) {
  console.log("does not exist");
}
// function getKeyByValue(object = stringMap, value = value) {
//  return Object.keys(object).find(key => object[key] === value);
