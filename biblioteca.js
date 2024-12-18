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
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			const libroEncontrado = biblioteca.find(libro => libro.titulo === titulo);
			if(libroEncontrado) {
				libroEncontrado.disponibilidad = false;
				resolve(libroEncontrado);
			} else {
				reject('Libro no encontrado');
			}
		}, 1500);
	});
}
      
       /* alert('Se procederá a guardar sus datos personales');
        let cliente = {
                    nombreYapellido: prompt('Nombre y apellido'),
                    tituloLibro: datosLibro.titulo,
                    fecha: new Date()
                };

         librosPrestados.push(cliente);*/
	


async function llevarLibro() {
    if (biblioteca.length === 0) {
        alert('No hay libros en la biblioteca por el momento');
        return;
    }

    let mensaje;
    do {
        const titulo = prompt('Titulo a buscar');
        console.log('Buscando el libro:', titulo);

        try {
            await buscarLibro(titulo);
            console.log('Libro encontrado');
        } catch (error) {
            console.error(error);
            alert(error); 
        }

        do {
            mensaje = prompt('Llevarse otro libro?[s/n]');
            if (mensaje !== 's' && mensaje !== 'n') {
                alert('Ingrese "s" o "n"');
            }
        } while (mensaje !== 's' && mensaje !== 'n');

    } while (mensaje === 's');
}


function librosFaltantes() {
	let long_biblioteca = biblioteca.length;

	if(long_biblioteca === 0) {
		alert('No hay libros cargados en la biblioteca por el momento');
	} else {
		const librosQueFaltan = biblioteca.filter(libro => libro.disponibilidad === false);

		for(let i = 0; i < long_biblioteca; i++){
			console.log(librosQueFaltan[i]);
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
		
	/*	case 4:
		break;	*/
	}

} while(op !== 5);