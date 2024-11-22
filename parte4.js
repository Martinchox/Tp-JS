function esPar(numero) {
    return numero % 2 === 0;
  }

  let numero = 0.33333;
  if (esPar(numero)) {
    console.log("El número " + numero + " es par" );
  } else {
    console.log("El número " + numero + " es impar");
  }



  function convertirCelsiusAFahrenheit(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    console.log(`${celsius}C es equivalente a ${fahrenheit}F`);
  }

  let temperaturaCelsius = 25;
convertirCelsiusAFahrenheit(temperaturaCelsius);