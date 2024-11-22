const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
  const parrafos = document.querySelectorAll('p');
  parrafos.forEach(parrafo => {
    parrafo.style.color = 'blue';
  });
});