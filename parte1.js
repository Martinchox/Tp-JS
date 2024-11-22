let a = 5;
let b = 10;
let c = a + b;

console.log("Valor de a: " + a);
console.log("Valor de b: " + b);
console.log("La suma de a y b es: " + c);






import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (userName) => {
  console.log(`Hola, ${userName}!`);
  rl.close();
});