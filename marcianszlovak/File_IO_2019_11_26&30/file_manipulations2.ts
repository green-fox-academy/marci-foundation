const fs = require("fs");
try {
    const content = fs.readFileSync("./file_manipulation_ts", "utf-8"); // megvárjuk amíg a fájl tartalmát beolvassuk
    console.log(content);
    console.log(typeof content);
    
} catch (error) {
    console.log(error.message);
}