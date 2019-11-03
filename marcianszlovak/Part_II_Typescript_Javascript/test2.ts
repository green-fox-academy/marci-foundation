var myAge = 40;
var age = 5;
var links = document.getElementsByTagName("a");

if (myAge < 18 || myAge > 30 || myAge === 35) {

    document.write("you aint coming!")

} else {

    document.write("You can come, you cool dude");

}


document.write("loop vége");

for (i = 1; i < 10; i++) {

    if (i === 5 || i === 3) {



        continue;
    }

    console.log(i);

    if (i === 6) {

        break;
    }

    for (i = 0; i < links.length; i++){

        links[i].className = "link-" + i;
    
    
    }

}

console.log("loopnak megint vége");

 // switch ha valami true onnantól mindent lefuttat

// break: itt abbahagyja a lefuttatást

// continue hagyja ki azt a részt majd folytassa. megy - stop - megy tovább