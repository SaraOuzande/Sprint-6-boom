
const numeroUsuarioInput = document.getElementById('numero-usuario');
const cuentaRegresivaDiv = document.getElementById('cuenta-regresiva');
const resultadoDiv = document.getElementById('resultado');
const reiniciarBtn = document.getElementById('reiniciar');


let numeroAleatorio;
let cuentaRegresiva = 5;
let intervalo;


function iniciarJuego() {
  resultadoDiv.textContent = '';
  numeroAleatorio = Math.floor(Math.random() * 3) + 1; 
  cuentaRegresiva = 5;
  cuentaRegresivaDiv.textContent = `Cuenta atrás: ${cuentaRegresiva}`;

  
  intervalo = setInterval(() => {
    cuentaRegresiva--;
    cuentaRegresivaDiv.textContent = `Cuenta atrás: ${cuentaRegresiva}`;

    if (cuentaRegresiva === 0) {
      clearInterval(intervalo);
      evaluarJuego();
    }
  }, 1000);
}


function evaluarJuego() {
  const numeroUsuario = parseInt(numeroUsuarioInput.value);

  if (!numeroUsuario || numeroUsuario < 1 || numeroUsuario > 3) {
    resultadoDiv.textContent = 'Introduce un número válido entre 1 y 3.';
    return;
  }

  if (numeroUsuario === numeroAleatorio) {
    resultadoDiv.textContent = `¡Has salvado el mundo! Elegiste ${numeroUsuario}, y el número correcto era ${numeroAleatorio}.`;
    resultadoDiv.style.color = 'green';
  } else {
    resultadoDiv.textContent = `La bomba ha estallado. Elegiste ${numeroUsuario}, pero el número correcto era ${numeroAleatorio}.`;
    resultadoDiv.style.color = 'red';
  }
}


function reiniciarJuego() {
  clearInterval(intervalo);
  numeroUsuarioInput.value = '';
  iniciarJuego();
}


iniciarJuego();


reiniciarBtn.addEventListener('click', reiniciarJuego);