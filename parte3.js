{
    let i = 10;

while (i >= 1) {
  console.log(`Valor de i: ${i}`);
  i--;
}

}








import * as readline from 'readline';
{
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    async function pedirNumero() {
      let numeroIngresado;
      do {
        await new Promise(resolve => {
          rl.question('Ingresa un número mayor a 100: ', (numero) => {
            numeroIngresado = parseInt(numero);
            if (isNaN(numeroIngresado)) {
              console.log("Error: ingresa un número válido");
            } else if (numeroIngresado <= 100) {
              console.log("El número ingresado debe ser mayor a 100");
            } else {
              console.log(`Ingresaste un número mayor a 100: ${numeroIngresado}`);
            }
            resolve();
          });
        });
      } while (numeroIngresado <= 100 || isNaN(numeroIngresado));
      rl.close();
    }
    
    pedirNumero();
}
