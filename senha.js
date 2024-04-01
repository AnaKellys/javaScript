const password = 'ANfelg678';
const numeros = [0, 1, 2, 3, 5, 6, 7, 8, 9];


function verifica(letterNumber) {
    let temLetraMaiuscula = false;
    let temLetraMinuscula = false;
    let temNumero = false;
    let tamanho = 6;
    let temcaracter = false

    if (letterNumber.length < tamanho) {
        return false;
    };

    for (let i = 0; i < letterNumber.length; i++) {

        if (isNaN(letterNumber[i])) {
            temcaracter = true
        }

        if (letterNumber[i] == letterNumber[i].toLowerCase() && !numeros.includes(Number(letterNumber[i]))) {
            temLetraMinuscula = true;
            // console.log('aqui', temLetraMinuscula);
        };
        if (letterNumber[i] == letterNumber[i].toUpperCase() && !numeros.includes(Number(letterNumber[i]))) {
            temLetraMaiuscula = true;
            // console.log('aqui', temLetraMaiuscula);
        };
        if (letterNumber.includes(Number([i]))) {  //(numeros.includes(letterNumber[i])) {
            temNumero = true;
            // console.log('aqui', numeros);
        };
    };
    return temLetraMaiuscula && temLetraMinuscula && temNumero && temcaracter;
};

console.log(verifica(password))

