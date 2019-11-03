let a : number = 24;
let out : number = 0;

if (a % 2 === 0) {

    ++out;
    console.log(out);

}

let b : number = 13;
let out2 : string = "";

if (b > 10 && b < 20) {

    out2 = "Sweet!"

} else if (b < 10) {

    out2 = "Less"

} else if (b < 20) {

    out2 = "More"

}

let c : number = 123;
let credits : number = 100;
let isBonus : boolean = false;

if (credits >= 50 && isBonus === false) {

    c = c - 1

} else if (credits < 50 && isBonus === false) {

    c = c - 1

}

let d : number = 8;
let time : number = 120;
let out3 : string = "";

if (d % 4 === 0 && time <= 200) {

    out3 = "check";
    console.log(out3);
}

if (time > 200) {

    out3 = "Time out";

} else {

    out3 = "Run Forest Run!";
    console.log(out3);
}
