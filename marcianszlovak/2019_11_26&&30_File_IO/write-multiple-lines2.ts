import fs from "fs";

let writer = fs.createWriteStream("log2.txt", {
  flags: "a"
});

writer.write("valami \n");
writer.write("valami1 \n");
writer.write("valami2 \n");
