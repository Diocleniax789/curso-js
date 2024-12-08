let animes = [], continuar = false;

while (!continuar) {
    let anime = {
        nombreAnime: prompt('Ingrese nombre del anime'),
        genero: prompt('Ingrese género'),
        edadPermitida: Number(prompt('Ingrese la edad permitida')),
        enEmision: false
    };
    animes.push(anime);
    continuar = !confirm('¿Desea agregar otro título de anime?');
}

alert('Listado de títulos de anime completado. Procederá al menú del ABM.');

function altas() {
    let tituloAnime, encontrado = false;

    tituloAnime = prompt('Ingrese título de anime para darlo de alta');

    for (let i = 0; i < animes.length; i++) {
        if (animes[i].nombreAnime === tituloAnime) {
            encontrado = true;
            if (!animes[i].enEmision) {
                animes[i].enEmision = true;
                alert('Anime dado de alta exitosamente.');
            } else {
                alert('Ese anime ya está dado de alta.');
            }
            break;
        }
    }

    if (!encontrado) {
        alert('Anime no encontrado.');
    }
}

function bajas() {
    let tituloAnime, encontrado = false;

    tituloAnime = prompt('Ingrese título de anime para darlo de baja');

    for (let i = 0; i < animes.length; i++) {
        if (animes[i].nombreAnime === tituloAnime) {
            encontrado = true;
            if (animes[i].enEmision) {
                animes[i].enEmision = false;
                alert('Anime dado de baja exitosamente.');
            } else {
                alert('Ese anime ya está dado de baja.');
            }
            break;
        }
    }

    if (!encontrado) {
        alert('Anime no encontrado.');
    }
}

function modificaciones() {
    let tituloAnime, encontrado = false;

    tituloAnime = prompt('Ingrese título de anime para modificar');

    for (let i = 0; i < animes.length; i++) {
        if (animes[i].nombreAnime === tituloAnime) {
            encontrado = true;
            animes[i] = {
                nombreAnime: prompt('Ingrese nuevo nombre del anime'),
                genero: prompt('Ingrese nuevo género'),
                edadPermitida: Number(prompt('Ingrese nueva edad permitida')),
                enEmision: confirm('¿Está en emisión?')
            };
            alert('Anime modificado exitosamente.');
            break;
        }
    }

    if (!encontrado) {
        alert('Anime no encontrado.');
    }
}

let op;

do {
    op = Number(prompt('Seleccione una opción [1. Alta | 2. Baja | 3. Modificaciones | 4. Finalizar]'));

    switch (op) {
        case 1:
            altas();
            break;
        case 2:
            bajas();
            break;
        case 3:
            modificaciones();
            break;
        case 4:
            alert('Gracias por usar el programa.');
            break;
        default:
            alert('Ingrese un número válido (1 a 4).');
    }
} while (op !== 4);

