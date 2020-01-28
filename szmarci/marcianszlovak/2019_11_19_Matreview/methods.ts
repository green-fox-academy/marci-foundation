const string = "apple";
string.charAt(0);

// string.indexOf() megkeresi hanyadik helyen van a stringben valami és megmondja hanyadik helyen van. ha nincs -1

const number = [11, 31, 20, 21];
console.log(number.sort);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // 1: 1-es index helyére, 0: semmit nem replacel, Feb: mit replaceljen az
//1-es helyen
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
