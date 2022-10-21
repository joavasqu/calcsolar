import { arregloInteracumuladores } from './data.js';
import { arregloEstablecimientos } from './data.js';

const datos = new URLSearchParams(window.location.search);

// estos son los datos que vienen de la página boilers.html donde se llenan los datos.
let tipoEst = datos.get('hospe'); // si seleccionaron que es hospedaje, el valor es 1, de lo contrario es 0.
let catHosp = datos.get('tipoHosp'); // esto nos dice que tipo de establecimiento es.
let camasCant = datos.get('camas'); // se llama por el name.
let catEst = datos.get('tipoEst');
let usuarios = datos.get('usuarios');
let tempBoiler = datos.get('temp');

// Estos son los elementos de la página de resultados.
let prueba = document.getElementById('establecimiento');

// Variables para los cálculos.

let tempAguaFria = 2;
let tempAguaCaliente = 44;
let indexEst = 0;
let totalACS = 0;

if(tipoEst=1){
    indexEst=catHosp;
}else{
    indexEst=catEst;
}

console.log(indexEst);
console.log(arregloEstablecimientos[indexEst].cantAcsxCama);

function totalLitrosAcs(){
    totalACS = camasCant * arregloEstablecimientos[indexEst].cantAcsxCama;
    return totalACS;
}

prueba.innerHTML = totalLitrosAcs();

//`lo primero es el tipo de establecimiento: ${tipoEst} , Luego tenemos la categoría del hospital que debe variar acorde a la respuesta: ${catHosp}. Luego tenemos la cantidad de camas: ${camasCant}. Luego la categoría de establecimiento no hospedaje ${catEst}. Y luego tenemos la cantidad de visita del establecimiento no hospedaje: ${usuarios} y la temperatura de acumulación del Boiler: ${tempBoiler} `;



// Llevo 2h30m trabajando en esta calculadora.