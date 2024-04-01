/* function separaLetras(letra) {
    if (quebra[0] == "S" && quebra[1] == "C" && quebra[1] == "V") {
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== string[i].toLowerCase()) {
                newString = newString + ' ';
            }
            newString = newString + string[i];
            newString = newString.toLowerCase();
        };
    };
} */

// bla bla 



function separaLetras() {

}
function stringMinusculas() {
    if (quebra[1] == "V" && quebra[1] == "C") {
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== string[i].toLowerCase()) {
                newString = newString + ' ';
            }
            newString = newString + string[i];
            newString = newString.toLowerCase();
        }
        console.log(newString.replace('\r'))
    }
}


function processDataInput(input) {

    let quebra = input.split(";");

    let string = quebra[2];
    let newString = '';

    if (quebra[0] == "S" && quebra[1] == "M") {
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== string[i].toLowerCase()) {
                newString = newString + ' ';
            }
            newString = newString + string[i];
            newString = newString.toLowerCase();
        }
        console.log(newString.replace('()', "").replace('\r'));
    }
    if (quebra[0] == "S" && quebra[1] == "V") {

        for (let i = 0; i < string.length; i++) {
            if (string[i] !== string[i].toLowerCase()) {
                newString = newString + ' ';
            }
            newString = newString + string[i];
            newString = newString.toLowerCase();
        }
        console.log(newString.replace('\r'))
    }

    if (quebra[0] == "S" && quebra[1] == "C") {
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== string[i].toLowerCase() && i !== 0) {
                newString = newString + ' ';
            }
            newString = newString + string[i];
            newString = newString.toLowerCase();
        }
        console.log(newString.replace('\r'))
    }

    if (quebra[0] == "C" && quebra[1] == "M") {
        let arrayString = string.split(" ");
        for (let i = 0; i < arrayString.length; i++) {

            if (i == 0) {
                arrayString[i] = arrayString[i][0].toLowerCase() + arrayString[i].slice(1)
                continue;
            }
            arrayString[i] = arrayString[i][0].toUpperCase() + arrayString[i].slice(1)
        }
        let stringJunta = arrayString.join("") + '()';
        console.log(stringJunta.replace('\r'))
    }

    if (quebra[0] == "C" && quebra[1] == "V") {
        let arrayString = string.split(" ");
        for (let i = 0; i < arrayString.length; i++) {

            if (i == 0) {
                arrayString[i] = arrayString[i][0].toLowerCase() + arrayString[i].slice(1)
                continue;
            }
            arrayString[i] = arrayString[i][0].toUpperCase() + arrayString[i].slice(1);

        }
        console.log(arrayString.join("").replace('\r'));
    }

    if (quebra[0] == "C" && quebra[1] == "C") {
        let arrayString = string.split(" ");
        for (let i = 0; i < arrayString.length; i++) {
            arrayString[i] = arrayString[i][0].toUpperCase() + arrayString[i].slice(1);
        }
        console.log(arrayString.join("").replace('\r'));
    }
}

function processData(input) {
    let array = input.split('\n')

    for (let i = 0; i < array.length; i++) {
        let string = processDataInput(array[i])
        // console.log(string.replace('\r'))
    }
}

processData(`
S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter`)