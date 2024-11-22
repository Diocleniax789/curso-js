// cadena de texto

const nombre = 'Julio';
const parrafo = 'Este es un parrafo';

//numero

const num = 1;
const dec = -75.40

//boolean

const usuarioConectado = true;

const mayorDeEdad = 18;

if (mayorDeEdad > 17) {

	console.log('El es mayor de edad porque tiene: ',mayorDeEdad,'años');
}

// arreglos

const personajes = ['Mikasa','Eren','Armin'];

// en este arreglo se han puesto varios tipos de datos, un string, numero,un booleano, un objetom y un array de numeros
const array_variado = ['Mikasa',4561,true,{character: 'Eren'},[1,2.,3]];

console.log(array_variado);
console.log('Los personajes de Attack On Titan son: ',personajes);

// Objetos

const juego = {
	nombre: 'Call of Duty',
	genero: 'Shooter',
	paisOrigen:{
		pais: 'USA',
		edad: 18,
	},
};

console.log(juego);

//funciones

function saludar(){
	console.log('Hola');
}

saludar();

let number1 = 8,number2 = 7,suma;

function sumar(a,b){
	 let resultado;

	 resultado = a + b;

	 return resultado;
}

suma = sumar(number1,number2);

console.log('El resultado de mi funcion sumar es: ',suma);


const game = 'Medal of Honor';

if (suma > 10) {
	console.log('Mi juego favorito es: ',game);
}