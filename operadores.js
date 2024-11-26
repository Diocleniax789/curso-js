/*

Operadores aritmeticos

	operador de asignacion '=',
	operador de suma '+',
	operador de resta '-',
	operador de producto '*',
	operador de division '/',
	operador modulo '%',
	operador aumento '++',
	operador decremento '--'
*/

/*
	Operadores de comparacion
	
	operadores de igualdad '==',
	operadores de igualdad en valor y de igualdad del tipo de valor '===',
	operador de diferente '!=',
	operador de diferente en valor y de diferente tipo '!==',
	menor que '<',
	mayor que '>',
	mayor igual que '>=',
	menor igual que '<=',
	operador ternario ?
*/

/* 

-----------------------------------------------------------------

Ejemplo 1: Suma basica entre dos numeros

let a = 2,b = 5,suma;

suma = a + b;

console.log('Resultado de la suma: ',suma);

------------------------------------------------------------------

// Ejemplo 2: Division y producto


let num1 = 1, num2 = 3,resultado;

function division(a,b){
	return a / b;
}

resultado = division(num1,num1);

console.log('El resultado de mi funcion division es:',resultado);

--------------------------------------------------------------------

 // Ejemplo del uso del operador ternario

let a = 4, b = 2, resultado, cartel;


function suma(num1,num2) {
	return a + b;
}

resultado = suma(a,b);

cartel = resultado > 5 ? 'El resultado es mas grande que el 5' : 'El resultado es menor que 5';

console.log(cartel);

----------------------------------------------------------------------------

 // Ejemplo de la diferencia entre == y ===

 let resultado;

 	resultado = 10 == '10' ? 'IGUALES' : 'DIFERENTES';
	
	console.log(resultado);

	CON == DEMUESTRA QUE LA COMPARACION ES VALIDA YA QUE EL VALOR EN SI ES EL MISMO

 let resultado;	
	
	resultado = 10 === '10' ? 'IGUALES' : 'DIFERENTES';

	console.log(resultado);

	CON === DEMUESTRA QUE SI BIEN EL VALOR ES EL MISMO, AMBOS COMPARTEN DIFERENTE TIPO DE DATOS
	POR LO QUE LA COMPARACION NOS INDICA QUE SON DIFERENTES

 */
