const lista = document.getElementById('lista');
const elementos = lista.children;

Array.from(elementos).forEach((elemento) => {
  elemento.addEventListener('click', () => {
    console.log(elemento.textContent);
  });
});