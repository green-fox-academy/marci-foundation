let list: any = {
  1: "William",
  2: "John",
  3: "Amanda"
};
Object.assign(list, { 4: "Mary" });

if (Object.keys(list).length === 0 && list.constructor === Object) {
  console.log("üres a lista");
}

console.log(Object.keys(list).length);
console.log(list[2]);

delete list[1];

Object.keys(list).forEach(function(key) {
    console.log(key, list[key]);
});
 // Object.assign([], { list }).reverse();

// console.log(list);