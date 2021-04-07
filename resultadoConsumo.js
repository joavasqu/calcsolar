import {arrayRad} from './data.js';

const datos = new URLSearchParams(window.location.search);

let ampolletas = datos.get('ampolletas');
let refrigerador = datos.get('refri');
let televisor = datos.get('tv');// cuando el input es tipo radio se pone el name y no el id.
let cantTv = datos.get('cantTv');
let lavadora = datos.get('lavadora');
let deco = datos.get('deco');
let micro = datos.get('micro');
let microVeces = datos.get('microVeces'); 
let radio = datos.get('radio');

function calcularConsumoMensual(){
    let calculo = (ampolletas*9*6*30)+(refrigerador*25000)+(televisor*cantTv*100*4*30)+(lavadora*1500*4.5)+(deco*10*4*30*cantTv)+(micro*microVeces*1500*3/60*30)+(radio*10*8*30); //son 4.5 semanas el mes en promedio por eso la lavadora se calcula *4
    return calculo/1000;

}

function calcularConsumoMensualReal(){
    let calculo = (ampolletas*9*6*30)+(refrigerador*25000)+(televisor*cantTv*100*4*30)+(lavadora*1500*4.5)+(deco*10*4*30*cantTv)+(micro*microVeces*1500*3/60*30)+(radio*10*8*30); //son 4.5 semanas el mes en promedio por eso la lavadora se calcula *4
    return ((calculo/(0.95*0.95*0.92*0.97)+(25*24*30))/1000);

}

//función para pasar a arreglo tabla la cobertura del consumo por parte de un determinado array.
function arregloAlista(arrayRad, potencia, consumo){
    var table = document.createElement('table');
    var cabezera = document.createElement('thead');
    var filaCabezera = cabezera.insertRow();
    var mes = filaCabezera.insertCell();
    mes.appendChild(document.createTextNode('MES'));
    var coberturaHead = filaCabezera.insertCell();
    coberturaHead.appendChild(document.createTextNode('COBERTURA'))
    filaCabezera.appendChild(mes);
    filaCabezera.appendChild(coberturaHead);
    cabezera.appendChild(filaCabezera);
    table.appendChild(cabezera);

    for(var i=0; i<arrayRad.length ;i++){
        var tr = table.insertRow();
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(arrayRad[i].mes));
        tr.appendChild(td);
        var cobertura = tr.insertCell();
        cobertura.appendChild(document.createTextNode(Math.floor(potencia*arrayRad[i].radiacion/consumo*100)+'%'));
        tr.appendChild(cobertura);
        table.appendChild(tr);
    }
    return table;
}

function capacidadBancoBatAcido(potenciaPaneles, consumoReal){
    if(potenciaPaneles/0.2 > consumoReal/30*2){
        return potenciaPaneles/0.2;        
    } else {
        return consumoReal/30*2;
    }
}
function capacidadBancoBatLitio(potenciaPaneles, consumoReal){
    if(potenciaPaneles/0.6 > consumoReal/30*2){
        return potenciaPaneles/0.6;        
    } else {
        return consumoReal/30*2;
    }
}

var consumo = calcularConsumoMensual();
consumo = consumo.toFixed(2);
var consumoReal = calcularConsumoMensualReal();
consumoReal = consumoReal.toFixed(2);
var potenciaArreglo = document.getElementById('potSolar').value;
var capBatAcido = capacidadBancoBatAcido(potenciaArreglo, consumoReal).toFixed(2); 
//capBatAcido = capBatAcido.toFixed(2);


// El consumo total mensual en HTML en la página de resultado
let consumoHtml = document.getElementById('consumo');
let consumoHtmlReal = document.getElementById('consumoReal');
let capBatHtml = document.getElementById('capBat');

// Acá ponemos los resultados:

consumoHtml.innerHTML = `El consumo eléctrico teórico mensual calculado es de: <b>${consumo} kWh</b>`;
consumoHtmlReal.innerHTML = `El consumo eléctrico mensual para un sistema OFF GRID calculado es de: <b>${consumoReal} kWh</b>`;
capBatHtml.innerHTML = `El banco de baterías ideal acorde a las condiciones antes mencionadas es de:<b> ${capBatAcido} kWh </b> `

// Acá se pone una primera tabla con la selección del primer arreglo disponible.

document.getElementById('tabla').appendChild(arregloAlista(arrayRad, potenciaArreglo, consumoReal));

document.getElementById('potSolar').addEventListener('change',  function(){
    var potenciaArreglo = document.getElementById('potSolar').value;
    var tabla = document.getElementById('tabla');
    var parentNode = tabla.parentNode;
    var tablaNueva = arregloAlista(arrayRad, potenciaArreglo, consumoReal);
    tablaNueva.id = 'tabla';
    parentNode.replaceChild(tablaNueva,tabla);
    var capBatAcido = capacidadBancoBatAcido(potenciaArreglo, consumoReal).toFixed(2); 
    capBatHtml.innerHTML = `El banco de baterías ideal acorde a las condiciones antes mencionadas es de:<b> ${capBatAcido} kWh </b> `

} )
