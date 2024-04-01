const people = [
  { name: 'Alice', age: 25, height: 186 },
  { name: 'Jonh', age: 19, height: 130 },
  { name: 'Bob', age: 30, height: 150 },
  { name: 'Charlie', age: 20, height: 125 },
];

function bubbleSort(valoresOrdenados, ordenar) {
  const percorre = valoresOrdenados.length;
  let troca;

  do {
    troca = false;
    for (let i = 0; i < percorre - 1; i++) {
      if (valoresOrdenados[i][ordenar] > valoresOrdenados[i + 1][ordenar]) {
        const aux = valoresOrdenados[i];
        valoresOrdenados[i] = valoresOrdenados[i + 1];
        valoresOrdenados[i + 1] = aux;
        troca = true;
      }
    }
  } while (troca);

  return valoresOrdenados;
}
console.log(bubbleSort(people, "age"));