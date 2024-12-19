const biblioteca = [];
const librosPrestados = [];
let op;


function cargarBiblioteca() {
	let continuarCargando = true, libro, mensaje;

	while(continuarCargando === true){
		libro = {
			titulo: prompt('Titulo'),
			genero: prompt('Genero'),
			disponibilidad: true
		}
		
		biblioteca.push(libro);
		mensaje = confirm('Continuar cargando?');
		if(mensaje === false){continuarCargando = false;}
	}

	console.log(biblioteca);
}

function buscarLibro(titulo) {
	const libroEncontrado = biblioteca.find(unLibro => unLibro.titulo === titulo && unLibro.disponibilidad === true) ?? null;
	if(libroEncontrado !== null){libroEncontrado.disponibilidad = false;}
	return libroEncontrado;
}
      
function llevarLibro() {
    
    let mensaje, libroEncontrado;

    if (biblioteca.length === 0) {
        alert('No hay libros en la biblioteca por el momento');
        return;
    }

  do {
        const titulo = prompt('Titulo a buscar');
        console.log('Buscando el libro:', titulo);
       
        libroEncontrado = buscarLibro(titulo);
 
        if(libroEncontrado !== null){
 
        	console.log('Libro encontrado! Se procedera a cargar su nombre');
        	let cliente = {
                    nombreYapellido: prompt('Nombre y apellido'),
                    tituloLibro: libroEncontrado.titulo,
                    dni: prompt('Documento'),
                    fecha: new Date()
                };

             librosPrestados.push(cliente);
        	 console.log('Disfrute su lectura');

        } else {
        	console.log('Ese libro no esta disponible!');
        }

        do {
            mensaje = prompt('Llevarse otro libro? [s/n]').toLowerCase();
            if (mensaje !== 's' && mensaje !== 'n') {
                alert('Ingrese "s" o "n"');
            }
        } while (mensaje !== 's' && mensaje !== 'n');
    } while(mensaje !== 'n');
}

function librosFaltantes() {
	let long_biblioteca = biblioteca.length;

	if(long_biblioteca === 0) {
		alert('No hay libros cargados en la biblioteca por el momento');
	} else {
		const deudor = biblioteca.filter(unLibro => unLibro.disponibilidad === false);
		console.log('Listado de todos los libros faltantes:');
		for(let i = 0; i < deudor.length; i++){
			console.log(deudor[i]);
		}	
	}
}

function consultarDeudores(){

	if(biblioteca.length === 0){
		console.log('No hay libros cargados en la biblioteca por el momento');
		return;
	} else{
		let continuar = true, mensaje;
		while(continuar === true) {
			let dni = prompt('Documento');
			let dniEncontrado = librosPrestados.find(unCliente => unCliente.dni === dni) ?? null;
			if(dniEncontrado !== null){
				const listadoDeudores = librosPrestados.filter(unCliente => unCliente.dni === dni);
				console.log('Listado de libros en posecion de un determinado cliente: ');
				for(let i = 0; i < listadoDeudores.length; i++){
					console.log(listadoDeudores[i]);
				}
			} else {
				console.log('No existe ese DNI');
			}

			mensaje = confirm('Desea consultar otro deudor?');
			if(mensaje === false){continuar = false;}
		}

	}
}

do {

	alert('1. Cargar biblioteca | 2. Llevar libro | 3. Ver libros faltantes | 4. Consultar deudores | 5. Salir');
	do {
		op = Number(prompt('Seleccione opcion'));
		if(op < 1 || op > 5){
			alert('xxxx Ingrese un numero entre 1 y 5 xxxx');
		}
	} while(op < 1 || op > 5);

	switch(op){
		case 1:
			cargarBiblioteca();
		break;

		case 2:
			llevarLibro();
		break;

		case 3:
			librosFaltantes();
		break
		
		case 4:
			consultarDeudores();
		break;
	}

} while(op !== 5);