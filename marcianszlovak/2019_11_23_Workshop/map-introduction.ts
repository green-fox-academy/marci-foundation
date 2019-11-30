let map: any = {};

if (Object.keys(map).length === 0 && map.constructor === Object) {
  console.log("üres a lista");
}

Object.assign(map, { 97: "a", 98: "b", 99: "c", 65: "A", 66: "B", 67: "C" });
console.log(Object.keys(map));
console.log(Object.values(map));
Object.assign(map, { 68: "D" });

/* for (const [key, value] of Object.entries(map)) {
  console.log(key, value);
}
export {}; */

console.log(map[99]);
delete map[97];
// console.log(map[97]); === undefined, kitörölte

if (map.hasOwnProperty(100)) {
  console.log("van");
} else {
  console.log("nincs");
}
// Verzió 1
for (const key in map) {
  delete map[key];
}
console.log(map);
// Verzió 2
for (const key in map) {
  if (map.hasOwnProperty(key)) {
    delete map[key];
  }
}

console.log(map);
