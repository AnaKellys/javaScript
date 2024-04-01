function reverterString(word) {
    let separaArr = ""

    for (let i = word.length - 1; i >= 0; i--) {
        separaArr += word[i]
    }
   
    return separaArr

};

console.log(reverterString('Hello, World!')); // "!dlroW ,olleH"
console.log(reverterString('JavaScript é incrível!')); // "!levírcni é tpircSavaJ"
console.log(reverterString('Ressecar')); // "racesseR"
console.log(reverterString('Hello, my name is GPT-3')); // "3-TPG si eman ym ,olleH"
console.log(reverterString('12345')); // "54321" */



/* let word = "julia"; // ailuj
let array = word.split("");
array.reverse();
let array2 = array.join("")
console.log(array2); */