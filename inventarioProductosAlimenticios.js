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

asignarCategoria = () => {
	let categoriaSeleccionada;

	do {

		categoriaSeleccionada = Number(prompt('1. Frutas y verduras | 2. Carnes y pescados | 3. Lácteos y huevos | 4. Panadería y repostería | 5. Cereales y granos | 6. Alimentos congelados | 7. Snacks y golosinas | 8. Bebidas | 9. Salsas y condimentos | 10. Pastas y arroces'));
		if (categoriaSeleccionada < 1 || categoriaSeleccionada > 11) {
			alert('xx EL NRO DE OPCION DEBE ESTAR EN EL RANGO DE ENTRE 1 Y 11');
		}
	} while(categoriaSeleccionada < 1 || categoriaSeleccionada > 11);

	switch(categoriaSeleccionada) {
	case 1:
		return 'Frutas y verduras';
		break;

	case 2:
		return 'Carnes y pescados';
		break;	

	case 3:
		return 'Lácteos y huevos';
		break;

	case 4:
		return 'Panadería y repostería';
		break;

	case 5:
		return 'Cereales y granos';
		break;

	case 6:
		return 'Alimentos congelados';
		break;

	case 7:
		return 'Snacks y golosinas';
		break;

	case 8:
		return 'Bebidas';
		break;

	case 9:
		return 'Salsas y condimentos';
		break;

	case 10:
		return 'Pastas y arroces';
		break;
	}

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
					categoria: asignarCategoria(),
					precio: Number(prompt('Precio')),
					stock: Number(prompt('Stock'))
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
						categoria: asignarCategoria(),
						precio: Number(prompt('Precio')),
						stock: Number(prompt('Stock'))
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

comprobarExistenciaProductos = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			if(productos.length !== 0){
				resolve(true);
			} else {
				reject('No se han encontrado productos en la base de datos. Intente luego');
			}
		},1500);
	});
}

async function verTodosLosProductos() {
	
	console.log('Generando lista de todos los productos...');

	try {

		let listaVacia = await comprobarExistenciaProductos();

		if (listaVacia) {
			console.log('*** LISTADO DE TODOS LOS PRODUCTOS ***');
			console.log('======================================');
			for(let i = 0; i < productos.length; i++) {
				console.log('Producto nro ',i + 1);
				console.log('ID: ',productos[i].id);
				console.log('Nombre: ',productos[i].nombre);
				console.log('Descripcion del producto: ',productos[i].descripcion);
				console.log('Categoria: ',productos[i].categoria);
				console.log('Precio: ',productos[i].precio);
				console.log('Stock: ',productos[i].stock);
			}
		}

	} catch(error) {
		console.log(error);
	}
}

async function buscarProductoPorID() {
	console.log('Comprobando la existencia de productos...');

	try {

		let listaVacia = await comprobarExistenciaProductos();

		if (listaVacia) {
			let id = ingresarCodigo();
			let idProductoEncontrado = productos.find(unProducto => unProducto.id === id) ?? null;
			if (idProductoEncontrado !== null) {
				console.log(idProductoEncontrado);
			} else {
				console.log('No se ha encontrado ese producto');
			}
		}
	} catch(error) {
		console.log(error);
	}
}

async function filtrarProductos() {
	console.log('Comprobando la existencia de productos...');

	try {

		let listaVacia = await comprobarExistenciaProductos();

		if (listaVacia) {
			let categoriaSeleccionada,productosFiltrados,option;
			do {
				categoriaSeleccionada = asignarCategoria();
				productosFiltrados = productos.filter(unProducto => unProducto.categoria === categoriaSeleccionada);
				if (productosFiltrados.length !== 0) {
					console.log('LISTADO DE TODOS LOS ARTICULOS DE LA CATEGORIA: ',categoriaSeleccionada);
					console.log('======================================================================');
					for(let i = 0; i < productosFiltrados.length; i++ ) {
						console.log('Producto nro ',i + 1);
						console.log('ID: ',productosFiltrados[i].id);
						console.log('Nombre: ',productosFiltrados[i].nombre);
						console.log('Descripcion del producto: ',productosFiltrados[i].descripcion);
						console.log('Precio: ',productosFiltrados[i].precio);
						console.log('Stock: ',productosFiltrados[i].stock);				
					}
			
				} else {
						console.log('No hay productos de esa categoria por el momento!');
				}	

				option = confirm('Ver listado de otra categoria?');

			} while(option !== false);

		}

	} catch(error) {
		console.log(error);
	}
}

async function ordenarProductosPorID() {
		console.log('Comprobando la existencia de productos...');

		try {
			let listaVacia = await comprobarExistenciaProductos();

			if (listaVacia) {
				let productosOrdenasID = productos.sort((unProducto, otroProducto) => unProducto.id - otroProducto.id);
					console.log('LISTADO DE TODOS LOS ARTICULOS ORDENADOS POR ID');
					console.log('======================================================================');
					for(let i = 0; i < productosOrdenasID.length; i++ ) {
						console.log('Producto nro ',i + 1);
						console.log('ID: ',productosOrdenasID[i].id);
						console.log('Nombre: ',productosOrdenasID[i].nombre);
						console.log('Descripcion del producto: ',productosOrdenasID[i].descripcion);
						console.log('Precio: ',productosOrdenasID[i].precio);
						console.log('Stock: ',productosOrdenasID[i].stock);				
					}				

			} else {
					console.log('No hay productos en la base de datos por el momento!');
			}

		} catch(error) {
				console.log(error);			
		}
}

async function actualizarProductos() {
	
	console.log('Comprobando la existencia de productos...');

	let option;

	do{
		try {
			let listaVacia = await comprobarExistenciaProductos();
			if (listaVacia) {
				let idNuevoProducto = ingresarCodigo();
				let buscarProducto = productos.find(unProducto => unProducto.id === idNuevoProducto) ?? null;				
				if (buscarProducto !== null) {
					let stock = Number(prompt('Cantidad a agregar'));
					buscarProducto.stock += stock;
					console.log('Stock actualizado');
				} else {
					console.log('No existe ese ID');
				}
			} else {
				console.log('No hay productos en la base de datos por el momento!');
			}

		} catch(error) {
			console.log(error);
		}

		option = confirm('Actualizar stock de otros producto?');

	} while(option !== false);
	
}


async function mainMenu() {
	let option;

	do {
		
		do {
			option = Number(prompt('1. Cargar datos de productos | 2. Ver todos los productos | 3. Buscar productos | 4. Filtrar productos por categoría | 5. Ordenar productos por ID | 6. Actualizar la cantidad de un producto | 7. Eliminar un producto | 8. Mostrar resumen del inventario | 9. Salir del programa'));

			if(option < 1 || option > 9) {
				alert('xx DEBE INGRESAR UN NUMERO DE ENTRE 1 Y 10. INTENTE NUEVAMENTE xx');
			} 

		} while(option < 1 || option > 9);

		switch(option) {
		case 1:
			await cargaDatos();
			break;

		case 2:
			await verTodosLosProductos();
			break;	

		case 3:
			await buscarProductoPorID();
			break;

		case 4:
			await filtrarProductos();
			break;	

		case 5:
			await ordenarProductosPorID();
			break;

		case 6:
			await actualizarProductos();
			break;				

/*			case 7:
			break;

			case 8:
			break;	*/
		}

	} while(option !== 9);
}

mainMenu();