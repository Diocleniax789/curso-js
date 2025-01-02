const productos = [];


ingresarCodigo = () => {
	let id;
	do {
		id = prompt('ID');
		if(id.length !== 5) {
			alert('xx EL ID DEBE TENER EXACTAMENTE 5 CARACTERES xx');
		}
	} while(id.length !== 5);

	return id;
}

realizarCarga = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {

			if(productos.length === 0){
				console.log('Como la base de datos esta vacia se cargara el primer producto.');
				let producto = {
								id: ingresarCodigo(),
								nombre: prompt('Nombre del producto'),
								descripcion: prompt('Descripcion del producto'),
								precio: Number(prompt('Precio'))
						};	

				productos.push(producto);

				resolve('Producto agregado a la base de datos!');

			} else {

				console.log('Se ingresar un nuevo ID pero antes se lo buscara para ver si ya no esta repetido');

				let idNuevoProducto = ingresarCodigo();
				let buscarProducto = productos.find(unProducto => unProducto.id === idNuevoProducto) ?? null;

				if(buscarProducto === null) {
						
						let producto = {
										id: idNuevoProducto,
										nombre: prompt('Nombre del producto'),
										descripcion: prompt('Descripcion del producto'),
										precio: Number(prompt('Precio'))
								};
					
					productos.push(producto);
					resolve('Producto agregado a la base de datos!');
				} else {
					reject('ID ya existente!');
				}
			}
		},1500);
	});
}

async function cargaDatos() {
	console.log('Verificando existencia de datos...');
	let option;

  do{

		try {
			const request = await realizarCarga();
			console.log(request);
		} catch(error) {
			console.log(error);
		}
		
		option = confirm('Continuar?');

	} while(option !== false);

}

async function mainMenu() {
	let option;

	do {
		
		do {
			option = Number(prompt('1. Cargar datos de productos | 2. Ver todos los productos | 3. Buscar productos | 4. Filtrar productos por categoría | 5. Ordenar productos | 6. Agregar un nuevo producto | 7. Actualizar la cantidad de un producto | 8. Eliminar un producto | 9. Mostrar resumen del inventario | 10. Salir del programa'));
	
			if(option < 1 || option > 10) {
				alert('xx DEBE INGRESAR UN NUMERO DE ENTRE 1 Y 10. INTENTE NUEVAMENTE xx');
			} 
		
		} while(option < 1 || option > 10);

		switch(option) {
			case 1:
				await cargaDatos();
			break;

/*		case 2:
			break;	

			case 3:
			break;

			case 4:
			break;	

			case 5:
			break;

			case 6:
			break;				

			case 7:
			break;

			case 8:
			break;	

			case 9:
			break;	 */

		}

	} while(option !== 10);
}

mainMenu();