let listaAnimes = [], tituloAnime, continuar = false,op,nombreAnime,flag,pos, continuar2 = false,op2;

while(continuar === false){
	tituloAnime = prompt('Ingrese titulo del anime');
	listaAnimes.push(tituloAnime);
	op = confirm('Desea agregar otro anime?');
	if(op === false){
		continuar = true;
	}
}

alert('Todos los animes han sido cargados');


do{

	nombreAnime = prompt('Ingrese nombre del anime para ver si esta en la lista');

	flag = false;
	pos = 0;

	do{
		if (nombreAnime === listaAnimes[pos]) {
			flag = true;
			break;
		} else{
			pos++;
		}

	} while(pos < listaAnimes.length && flag === false);

	flag === true ? alert('Anime encontrado!') : alert('Anime no encontrado');

	op2 = confirm('Realizar otra busqueda?');

	if(op2 === false){
		continuar2 = true;
	}

} while(continuar2 === false);

