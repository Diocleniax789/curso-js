let listaNumeros = [], num,numeroAbuscar,i,j,k,aux,flag, inf,sup,medio,longArreglo,continuar,op;

	for(i = 0; i < 10; i++){
		num = prompt('Ingrese numero para llenar en el arreglo');
		listaNumeros.push(num);
	}

	alert('Todos los numeros fueron cargados correctamente!');


	for(j = 0; j < listaNumeros.length; j++){
		for(k = j + 1; k < listaNumeros.length; k++){
			if(listaNumeros[j] > listaNumeros[k]){
				aux = listaNumeros[j];
				listaNumeros[j] = listaNumeros[k];
				listaNumeros[k] = aux;
			}
		}
	}

	longArreglo = listaNumeros.length;

	alert('Tu arreglo tambien se ordeno');

continuar = false;

do{

	numeroAbuscar = prompt('Ingrese un numero para buscarlo en el arreglo');

	flag = 0;
	inf = 0;
	sup = longArreglo - 1;
	do{
		medio = Math.floor((inf + sup) / 2);
		if(numeroAbuscar === listaNumeros[medio]){
			flag = 1;
		} else if(listaNumeros[medio] > numeroAbuscar){
			sup = medio - 1;
		} else{
			inf = medio + 1;
		}

	} while(inf <= sup && flag === 0);

	if(flag === 1){
		console.log('El numero ',numeroAbuscar,' que ingresaste se encuentra en el arreglo en la posicion ',medio);
	} else{
		alert('Numero ingresado no encontrado');
	}


	op = confirm('Volver a intentar?');
	if(op === false){
		continuar = true;
	}


} while(continuar === false);