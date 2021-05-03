import {arrayRad} from './data.js';
import {arregloPv} from './data.js';
import {arregloBatLitio} from './data.js';

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

var consumo = calcularConsumoMensual();
consumo = consumo.toFixed(2);
var consumoReal = calcularConsumoMensualReal();
consumoReal = consumoReal.toFixed(2);
var potenciaArreglo = document.getElementById('potSolar').value;


// El consumo total mensual en HTML en la página de resultado
let consumoHtml = document.getElementById('consumo');
let consumoHtmlReal = document.getElementById('consumoReal');


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

function crearSelect(arreglo, capMin){
    var select = document.createElement('select');
    select.id = 'bancoLitio';

    for(var i=0; i<arreglo.length; i++){
        if(arreglo[i].capacidad > capMin){
            var option = document.createElement('option');
            option.value = arreglo[i].capacidad;
            option.innerHTML = `${arreglo[i].nombre}: capacidad de ${arreglo[i].capacidad}kWh y voltaje: ${arreglo[i].voltaje}V`;
            select.appendChild(option);
        }
       
    }
    return select;
}


//console.log(crearSelect(arregloBatLitio));


function capacidadBancoBatAcido(potenciaPaneles, consumoReal){
    var capBatHtml = document.getElementById('capBat');
    var tipoBat = document.getElementById('tipoBat').value;
    var autonomia = document.getElementById('autonomia').value;
    capBatHtml.style.display = "block";
    if(tipoBat =='litio'){
        if(potenciaPaneles/0.6 > consumoReal/30*autonomia){       
            capBatHtml.innerHTML = `El banco de baterías ideal acorde a las condiciones antes mencionadas es de:<b> ${(potenciaPaneles/0.6).toFixed(2)} kWh</b> `       
        } else {
                capBatHtml.innerHTML = `El banco de baterías ideal acorde a las condiciones antes mencionadas es de:<b> ${(consumoReal/30*autonomia).toFixed(2)} kWh</b> `
        }
    } else if (tipoBat == 'acido'){
        if(potenciaPaneles/0.2 > consumoReal/30*autonomia){       
            capBatHtml.innerHTML = `El banco de baterías ideal acorde a las condiciones antes mencionadas es de:<b> ${(potenciaPaneles/0.2).toFixed(2)} kWh</b> `       
        } else {
                capBatHtml.innerHTML = `El banco de baterías ideal acorde a las condiciones antes mencionadas es de:<b> ${(consumoReal/30*autonomia).toFixed(2)} kWh</b> `
        } 

    } else {
        capBatHtml.innerHTML = 'algo no funciona';
    }
}





// Acá ponemos los resultados:

consumoHtml.innerHTML = `El consumo eléctrico teórico mensual calculado es de: <b>${consumo} kWh</b>`;
consumoHtmlReal.innerHTML = `El consumo eléctrico mensual para un sistema OFF GRID calculado es de: <b>${consumoReal} kWh</b>`;
//capBatHtml.innerHTML = `El banco de baterías ideal acorde a las condiciones antes mencionadas es de:<b> ${capBatAcido} kWh </b> `

// Acá se pone una primera tabla con la selección del primer arreglo disponible.

document.getElementById('tabla').appendChild(arregloAlista(arrayRad, potenciaArreglo, consumoReal));

document.getElementById('potSolar').addEventListener('change',  function(){
    potenciaArreglo = document.getElementById('potSolar').value;
    var tabla = document.getElementById('tabla');
    var parentNode = tabla.parentNode;
    var tablaNueva = arregloAlista(arrayRad, potenciaArreglo, consumoReal);
    tablaNueva.id = 'tabla';
    parentNode.replaceChild(tablaNueva,tabla);
    localStorage.setItem('tabla',tablaNueva.innerHTML);


} )

document.getElementById('calcBat').addEventListener('click', function(){
     capacidadBancoBatAcido(potenciaArreglo, consumoReal);
})

// Me desaparece el cálculo de batería si cualquiera de los parámetros que se pueden cambiar, cambia

document.getElementById('potSolar').addEventListener('change', () =>{document.getElementById('capBat').style.display='none';})
document.getElementById('tipoBat').addEventListener('change', () =>{document.getElementById('capBat').style.display='none';})
document.getElementById('autonomia').addEventListener('change', () =>{document.getElementById('capBat').style.display='none';})

document.getElementById('banco').parentNode.insertBefore(crearSelect(arregloBatLitio, 3),document.getElementById('banco').nextSibling);