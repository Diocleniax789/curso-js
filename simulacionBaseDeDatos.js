let softwares = [], nombreSoftware, op,op2, continuar = false, op3;

while(continuar === false){
	
	nombreSoftware = {
		nombre: prompt('Ingrese nombre del software'),
		desarrolladora: prompt('Ingrese nombre de la desarrolladora')
	};

	softwares.push(nombreSoftware);
	
	do{
		op2 = prompt('Agregar otro software a la base de datos? [si/no]');
		if(op2 !== 'si' && op2 !== 'no'){
			alert('Ingrese "si" o "no"');
		}

	} while(op2 !== 'si' && op2 !== 'no');

	if (op2 === 'no') { continuar = true; };
}

function agregarNuevoSoftware(nuevoSoftware) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let longNombre = nuevoSoftware.nombre.length;

            if (longNombre <= 20) {
                softwares.push(nuevoSoftware);
                resolve('El software se ha agregado exitosamente!');
            } else {
                reject('El software tiene un nombre muy largo. No se lo guardará.');
            }
        }, 1500);
    });
}


do{

nombreSoftware = {
		nombre: prompt('Ingrese nombre del software'),
		desarrolladora: prompt('Ingrese nombre de la desarrolladora')
	};


agregarNuevoSoftware(nombreSoftware)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });

    do{
    	op3 = prompt('Desea agregar otro software? [si|no]');
		if (op3 !== 'si' && op3 !== 'no') { alert('Ingrese "si" o "no"');}

	} while(op3 !== 'si' && op3 !== 'no');

} while(op3 !== 'no');

console.log(softwares);