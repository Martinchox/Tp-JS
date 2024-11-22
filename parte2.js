let a = 10;
let b = 14;
let c;

if (a > b) {
  c = a;
} else {
  c = b;
}

console.log("El mayor de los 3 números es: " + c);






import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ', (numeroIngresado) => {
  if (isNaN(numeroIngresado)) {
    console.log("Error: ingresa un número válido");
  } else {
    if (numeroIngresado % 2 === 0) {
      console.log(`El número ${numeroIngresado} es par`);
    } else {
      console.log(`El número ${numeroIngresado} es impar`);
    }
  }
  rl.close();
});