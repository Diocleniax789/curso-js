let boton = document.getElementById('boton-incrementar');
let reiniciar = document.getElementById('boton-incrementar');
let acumulador = 0;
const cartelAlerta = document.getElementById('cartel-alerta');

boton.addEventListener('click',() => {
	if (acumulador >= 0 && acumulador <= 5) {
		boton.textContent = acumulador;
		acumulador += 1;
		console.log(acumulador);
	} else {
		boton.textContent = 'ACUMULADOR LLENO!';
		cartelAlerta.style.display = 'flex';
		boton.style.background = 'red';
	}
});

boton.addEventListener('dblclick', () => {
	if (acumulador > 5) {
		boton.style.background = 'white';
		boton.textContent = 'Click Aqui!';
		cartelAlerta.style.display = 'none';
		acumulador = 0;
		console.log(acumulador);
	}
});

