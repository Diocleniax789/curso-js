const users = [];
let idCounter = 1, user,userCreated,continuar,name,mail,longMail,op,opciones;

user = (name,mail) => {
	let user = {
		id: idCounter,
		name: name,
		mail: mail
	};			

	return user;
}

continuar = false;
while(continuar === false){
	name = prompt('Ingrese nombre del usuario');
	
	do{

		mail = prompt('Ingrese mail del usuario');
		longMail = mail.length;
		if (longMail > 15) {
			alert('El mail es demasiado largo');
		}

	} while(longMail > 15);

	userCreated = user(name,mail);
	users.push(userCreated);
	idCounter++;

	alert('* USUARIO CARGADO *');

	do{
		op = prompt('Desea agregar otro usuario? [si/no]');
		if (op !== 'si' && op !== 'no') { alert('Ingrese "si" o "no"'); }

	} while(op !== 'si' && op !== 'no');

	if (op == 'no') { continuar = true; }

}

alert('*** TODOS LOS USUARIOS HAN SIDO CARGADOS CON EXITO! ***');

do{
	do{

		opciones = Number(prompt('1. Agregar usuario | 2. Actualizar usuario | 3. Eliminar usuario | 4. Salir'));
		if (opciones < 1 || opciones > 4) { alert('x SELECCIONE UNA OPCION ADECUADA x'); } 

} while(opciones < 1 || opciones > 4);

switch(opciones){
	case 1:
		agregarUsuario();
	break;

	case 2:
		actualizarUsuario();
	break;

	case 3:
	break;
}

} while(opciones != 4);


function agregarUsuario() {
	let valido,seguir,name,mail.longMail;
	const registroFinalizado = (name,mail) => {
		return new Promise((resolve,reject) => {
			setTimeout(() => {
				let pos = 0, usuarioEncontrado = 0;
					do{
						if(name === users[pos].name && mail === users[pos].mail){
							usuarioEncontrado = 1;
							break;
						} else{
							pos++;
						}

					} while(pos < users.length && usuarioEncontrado === 0); 

					if (usuarioEncontrado === 0) {
						resolve('* USUARIO NO ENCONTRADO. SE LO AGREGARA *');
					} else{
						reject('x USUARIO YA EXISTENTE. INGRESE OTRO x');
					}

			},2000);
		});
	}


 do{


	name = prompt('Ingrese nombre del usuario');
	
	do{

		mail = prompt('Ingrese mail del usuario');
		longMail = mail.length;
		if (longMail > 15) {
			alert('El mail es demasiado largo');
		}

	} while(longMail > 15);

	registroFinalizado(name,mail)
		.then(resultado => {
			alert(resultado);
			userCreated = user(name,mail);
			users.push(userCreated);
			alert('*** USUARIO AGREGADO A LA BASE DE DATOS CON EXITO! ***');
		})
		.catch(error => {
			alert(error);
		});

    	do{
    		seguir = prompt('Desea agregar otro usuario? [si|no]');
			if (seguir !== 'si' && seguir !== 'no') { alert('Ingrese "si" o "no"');}

		} while(seguir !== 'si' && seguir !== 'no');

	} while(seguir !== 'no');

}

function actualizarUsuario() {
	let usuario
}