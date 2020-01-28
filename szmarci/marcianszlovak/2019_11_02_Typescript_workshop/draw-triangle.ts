/*for (let i: number = 0; i <= lineCount; i++) {
  üres = üres + "*";

  let lineCount = 4;
let üres = "";
}
 */

let stars = [...new Array(3)];
let star: string = "*";
stars.forEach(element => {
  star = star + "*";
  console.log(star);
});
