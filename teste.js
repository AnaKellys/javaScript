const password = '13224354';
const numeros = [0, 1, 2, 3, 5, 6, 7, 8, 9];

function verifica(letterNumber) {
    let temLetraMaiuscula = false;
    let temLetraMinuscula = false;
    let temNumero = false;
    let tamanho = 8;

   /*  if (tamanho < password.length) {
        tamanho = false
    }; */

    for (let i = 0; i < letterNumber.length; i++) {
        if (!numeros.includes(Number(letterNumber[i])) && letterNumber[i] === letterNumber[i].toLowerCase()) {
            temLetraMinuscula = true;
            //console.log('aqui', temLetraMinuscula);
        };

        if (!numeros.includes(Number(letterNumber[i])) && letterNumber[i] === letterNumber[i].toUpperCase()) {
            temLetraMaiuscula = true;
            // console.log('aqui', temLetraMaiuscula);
        };
        if (!temLetraMaiuscula && !temLetraMinuscula == numeros.includes(Number(letterNumber[i]))) {  //(numeros.includes(letterNumber[i])) {
            temNumero = true;
            // console.log('aqui', numeros);
        };

    };
    return temLetraMaiuscula && temLetraMinuscula && temNumero;
};

console.log(verifica(password))