
// Variables

const cuartos = document.querySelector('#cuartos').value;
const desde = document.querySelector('#desde').value;
const hasta = document.querySelector('#hasta').value;

let total = document.querySelector('#total');

const buscar = document.querySelector('#buscar');

const clean = document.querySelector('#limpiar');

const recargar = document.querySelector('#recargar');

// contenedor de resultados

const propiedades = document.querySelector('#arreglo');

// objeto vacio

const datosBusqueda = {
    rooms: '',
    min: '',
    max: '',
}

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarPropiedades(propiedadesJSON)  // muestra los automoviles al cargar
    

});

buscar.addEventListener('click', () => {

    mensajeError();

    datosBusqueda.rooms = cuartos;
    datosBusqueda.min = desde;
    datosBusqueda.max = hasta;

    filtrarPropiedades();

    
} );

clean.addEventListener('click', () => {

    limpiarValores();
    
} );

recargar.addEventListener('click', () => {

    location.reload();
    
} );


// Funciones

function mostrarPropiedades(propiedadesJSON){

    limpiar(); // elimina el html previo


   for( let propiedad of propiedadesJSON ) {

    const {src, name, rooms, m, description} = propiedad;
    
    propiedades.innerHTML += ` <div class="propiedad" id="card"> 
        <div class="img" style="background-image: url(${src})"></div>
        <section>
            <h5>${name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${rooms}</p>
                <p>Metros: ${m}</p>
            </div>
            <p class="my-3">${description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
        </div> `
   }
   total.innerHTML = propiedadesJSON.length;
}

// limpiar html

function limpiar() {
    while(propiedades.firstChild) {
        propiedades.removeChild(propiedades.firstChild);
    }
    
}

function limpiarValores () {
    
    document.querySelector('#cuartos').value = "";
    document.querySelector('#desde').value = ""; 
    document.querySelector('#hasta').value = "";

}


function filtrarPropiedades() {

    const propiedades = propiedadesJSON.filter(filtrarCuartos).filter(filtarMetros);

    mostrarPropiedades(propiedades)

    total.innerHTML = propiedades.length;
    
}

function filtrarCuartos (propiedad) {
    if(datosBusqueda.rooms) {
        return propiedad.rooms == datosBusqueda.rooms;
    }
    return propiedad;
    
}

function filtarMetros(propiedad) {
    if(datosBusqueda) {
        return (propiedad.m >= datosBusqueda.min) && (propiedad.m <= datosBusqueda.max) ;
    }
    return propiedad;
}

function mensajeError() {
    vacio = "";
    if (cuartos == vacio  || desde == vacio  || hasta == vacio) {
        alert(' Favor rellenar todos los campos ')
    }
}