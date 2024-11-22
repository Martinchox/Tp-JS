let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

// Multiplicar cada número por 2 y almacenar los resultados en un nuevo array
for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar el array original y el nuevo array en la consola
console.log(`Números originales: ${numeros}`);
console.log(`Números multiplicados por 2: ${numerosMultiplicados}`);



let pares = [];

// Iterar hasta 20 y agregar los primeros 10 números pares al array
for (let i = 2; i <= 20; i += 2) {
  pares.push(i);
  if (pares.length === 10) break;
}

// Imprimir el array pares en la consola
console.log(`primeros 10 numeros pares:  ${pares}`); 