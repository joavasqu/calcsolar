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

var consumo = calcularConsumoMensual();


// El consumo total mensual en HTML en la página de resultado
let consumoHtml = document.getElementById('consumo');
// Arreglo 1
let arreglo1 = document.getElementById('arreglo1');

// Acá ponemos los resultados:

consumoHtml.innerHTML = `El consumo mensual calculado es de: <b>${consumo} kWh</b>`;

var potenciaArreglo = document.getElementById('potSolar').value;
document.getElementById('tabla').appendChild(arregloAlista(arrayRad, potenciaArreglo, consumo));

document.getElementById('potSolar').addEventListener('change',  function(){
    var potenciaArreglo = document.getElementById('potSolar').value;
    var tabla = document.getElementById('tabla');
    var parentNode = tabla.parentNode;
    var tablaNueva = arregloAlista(arrayRad, potenciaArreglo, consumo);
    tablaNueva.id = 'tabla';
    parentNode.replaceChild(tablaNueva,tabla);
} )
