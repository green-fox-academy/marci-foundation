// Create a method that decrypts reversed-order.txt
import fs from "fs";

function reversedOrder(content: string): string {
  let newStr = "";
  let newArr = content.split("\n");

  for (let index: number = 0; index < newArr.length; index++) {
    newStr += newArr[newArr.length - 1 - index] + "\n";
  }
  return newStr;
}
try {
  let reverseOrder: string = fs.readFileSync("reversed-order.txt", "utf-8");
  console.log(reversedOrder(reverseOrder));
} catch (error) {
  console.log(error.message);
}

export {};
