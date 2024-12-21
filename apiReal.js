// Esto simula una base de datos de videojuegos
const baseDeDatosVideojuegos = [	
	{ codigoProducto: '450190', nombre: 'Medal of Honor Allied Assault', desarrolladora: 'EA',ESRB: '+18'},	
	{ codigoProducto: '785426', nombre: 'Call of Duty 2: Big Red One', desarrolladora: 'Activision',ESRB: '+18'},
	{ codigoProducto: '542869', nombre: 'Enclave', desarrolladora: 'Starbreeze', ESRB: '+16'},
	{ codigoProducto: '624569', nombre: 'Counter Strike 1.6', desarrolladora: 'Valve', ESRB: '+16'},
	{ codigoProducto: '632484', nombre: 'Half-Life', desarrolladora: 'Valve', ESRB: '+16'},
	{ codigoProducto: '858269', nombre: 'Battlefield V', desarrolladora: 'DICE', ESRB: '+18'}	
];

// Esta funcion se encargara respectivamente de buscar el juego mediante el codigo de producto y devolvera una promesa

function buscarVideojuego(codigoProducto) {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			let videojuegoEncontrado = baseDeDatosVideojuegos.find(unVideojuego => unVideojuego.codigoProducto === codigoProducto) ?? null;
			if(videojuegoEncontrado !== null) {
				resolve(videojuegoEncontrado);
			} else {
				reject('Videojuego no encontrado');
			}	

		}, 1500);
	});
}

// Esta funcion asincrona se encarga de ejecutar la busca y a esperar a que la promesa tenga un valor
async function ejecutarBusqueda(codigoProducto) {
	console.log('Realizando busqueda...');
	try {
		const resultado = await buscarVideojuego(codigoProducto);
		console.log(resultado);
	} catch(error) {
		console.log(error);
	}
}

// Validacion para el codigo ingresado, que de ser correcto, se le pasara a la funcion ejecutarBusqueda para realizar las operaciones
do {

	let codProd = prompt('Ingrese codigo de producto');
	if (codProd.length !== 6) {
		alert('El codigo debe contener exactamente 6 numeros');
	}

} while(codProd.length !== 6);

ejecutarBusqueda(codProd);