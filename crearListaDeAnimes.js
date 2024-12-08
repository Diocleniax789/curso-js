let listaAnimes = [], tituloAnime, continuar = false,op;

while(continuar === false){
	tituloAnime = prompt('Ingrese titulo del anime');
	listaAnimes.push(tituloAnime);
	op = confirm('Desea agregar otro anime?');
	if(op === false){
		continuar = true;
	}
}

alert('Todos los animes han sido cargados');

console.log(listaAnimes);
