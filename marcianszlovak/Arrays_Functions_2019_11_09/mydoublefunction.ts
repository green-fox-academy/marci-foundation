let myArray = ['cica', 'kutya', 'pingvin'];

let output = '';

// cicacica kutyakutya pingvinpingvin
// myArray[0] + myArray[0] + myArray[1]*2 + myArray[2]*2

function doubleEveryElement(array: any[]) {
    array.forEach(element => {
        output += element + element + ' ';
    });
    console.log(output);
}

doubleEveryElement(myArray);
