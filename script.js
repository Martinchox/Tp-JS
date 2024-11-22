const boton = document.getElementById('boton');
const texto = document.getElementById('texto');

boton.addEventListener('click', (e) => {
  e.preventDefault();
  const valor = texto.value;
  alert(`Usted ingresó: ${valor}`);
  alert(`Mensaje enviado: ${valor}`);
});

