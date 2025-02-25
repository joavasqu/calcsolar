// importación de módulos

import {arrayMppt, arrayCables} from './data.js';

const datos = new URLSearchParams(window.location.search);

// esta función elige al primer controlador del arreglo de controladores que cumple con las características requeridas.
function eleccionModeloMppt(maxVoc, ampsMax, arregloControladores, voltajeBateria){
    var modelos = [];
    for(var i=0; i<arregloControladores.length;i++){
        if(arregloControladores[i].ventrada > maxVoc && arregloControladores[i].capacidad > ampsMax && arregloControladores[i].maxvoltbateria >= voltajeBateria){
            modelos.push(arregloControladores[i].modelo);
            break;
        }
    }
    return modelos;
}
// esta función es la misma que la anterior pero sin el Break para que salgan todos los controlres adecuados.
function eleccionModeloMpptTodos(maxVoc, ampsMax, arregloControladores, voltajeBateria){
    var modelos = [];
    for(var i=0; i<arregloControladores.length;i++){
        if(arregloControladores[i].ventrada > maxVoc && arregloControladores[i].capacidad > ampsMax && arregloControladores[i].maxvoltbateria >= voltajeBateria){
            modelos.push(" "+ arregloControladores[i].modelo +" ");
                    }
    }
    return modelos;
}
// esta función me convierte un arreglo de strings en una unordered list para HTML.

function arregloAlista(array){
    var unorderedList = document.createElement('ul');
    for(var i=0; i<array.length ;i++){
        var lista = document.createElement('li');
        var text = document.createTextNode(array[i]);
        lista.appendChild(text);
        unorderedList.appendChild(lista);
    }
    return unorderedList;
}

// esta función cálcula la sección del conductor adecuado para tener una pérdida inferior a 2%. Devuelve el string con los 3 valores que sirven, donde en la posición 2 está el cable en mm2 que se usó para calcular. Ver mas detalles del arreglo de cables en data.js. El input voltajeVoc es un número que corresponde al máximo voltaje del arreglo.

function dimensionadorCable(distancia, amperaje, voltajeVoc, caida){
    var cablePerdida = [];
    for(var i = 0; i<arrayCables.length;i++){
        if(amperaje < arrayCables[i][3]){
            if(((2*0.000000017*distancia*amperaje)/((arrayCables[i][2]/1000000)*voltajeVoc))< caida){
                cablePerdida.push(arrayCables[i]);
                //le agregamos la pérdida en %.
                cablePerdida[0][3]= (((2*0.000000017*distancia*amperaje)/((arrayCables[i][2]/1000000)*voltajeVoc))*100).toFixed(2)+'%';
                return cablePerdida;
                break;
            }
        }
    }
}


// Acá asignamos variables a elementos HTML de la respuesta.
let mppt = document.getElementById('mppt');
let mpptH2 = document.getElementById('mppth2');
let mpptadecuado = document.getElementById('mpptadecuado');
let mpptTodosAdecuados = document.getElementById('todosmpptadecuado');
let controlador = '';

// Acá obtenemos todos los datos que el usuario submitió en el formulario:

let potencia = datos.get('potenciaPanel');
let voc = datos.get('Voc');
let temp = datos.get('tempMin');
let string = datos.get('cantSerie');
let cantString = datos.get('cantString');
let voltBat = datos.get('voltBat');
let distancia = datos.get('distancia');
let potenciaInv = datos.get('potencia-inv');
    // Cálculo de VOC máximo
let vocMax = voc * (1+(temp - 25)*-0.33/100)*string;
vocMax = vocMax.toFixed(2);

    //Cálculo de la capacidad requerida del MPPT.
let potenciaArreglo = potencia*string*cantString;
let amps = 0;

    if(voltBat == 12){
        amps = (potenciaArreglo/(14)).toFixed(2);
        } else if(voltBat == 24){
            amps = (potenciaArreglo/(28)).toFixed(2);
        } else if(voltBat == 48){
            amps = (potenciaArreglo/(56)).toFixed(2);
        }

    //Determinación del voltaje de entrada adecuado para el MPPT.

    if(vocMax < 100){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 100V.';
    } else if (vocMax < 150){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 150V.';
    } else if (vocMax < 200){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 200V.';
    } else if (vocMax < 450){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 450V.';
    } else {
        controlador = '<b>NO HAY DISPONIBLES</b> controladores de carga MPPT para voltajes de entrada superiores a 450V';
    }



//se seleccionan los MPPT adecuados con las funciones indicadas arriba.
    
var mpptAdecuado = eleccionModeloMppt(vocMax, amps, arrayMppt, voltBat);
var mpptTodos = arregloAlista(eleccionModeloMpptTodos(vocMax, amps, arrayMppt, voltBat));

mpptH2.style.display = 'block';
mppt.innerHTML = controlador +` El controlador debe tener una capacidad de carga igual o mayor a <b>${amps} A.</b> `;
mpptadecuado.innerHTML = `- El modelo adecuado es: <b>${mpptAdecuado}</b>`;
mpptTodosAdecuados.appendChild(mpptTodos);

// Acá pondremos las características del string.

document.getElementById('pot-total').innerHTML = `La potencia total del arreglo fotovoltaico es de <b>${potenciaArreglo} Watt</b>`;
document.getElementById('voc-string').innerHTML = `El voltaje máximo de circuito abierto para una temperatura de ${temp}°C es de <b>${vocMax} Volts.</b> *`;

// Acá abajo pondremos el innerHTML los datos ingresados por el usuario.

document.getElementById('potenciaPanel').innerHTML = `Potencia del panel es de: <b>${potencia}</b> Watts`;
document.getElementById('Voc').innerHTML = `El voltaje de circuito abierto del panel es de <b>${voc}</b> Volts`;
document.getElementById('tempMin').innerHTML =`La temperatura mínima de operación es de <b>${temp}</b> °C` ;
document.getElementById('cantSerie').innerHTML = `La cantidad de de paneles en serie por cada string es de: <b>${string}</b>`;
document.getElementById('cantString').innerHTML = `La cantidad de strings es de <b>${cantString}</b> Strings`;
document.getElementById('voltBat').innerHTML = `El voltaje del banco de baterías es de <b>${voltBat}</b> Volts`;

// Acá abajo calcularemos la sección recomendada del cable y pondremos el innerHTML el resultado.

//1. Entre Paneles y Regulador de Carga
var maxAmperajeArreglo = potenciaArreglo/(voc*string*0.83);
var seccionRecomendada1 = dimensionadorCable(distancia, maxAmperajeArreglo, (voc*string*0.83), 0.02);
var seccionRecomendada2 = dimensionadorCable(distancia, maxAmperajeArreglo, (voc*string*0.83), 0.03);

document.getElementById('cableAdecuado').innerHTML = `- La sección de cable recomendada entre los paneles y el regulador de carga para una distancia de ${distancia} metros es de: <b>${seccionRecomendada1[0][2]} mm2</b>, generando una pérdida de <b>${seccionRecomendada1[0][3]}</b>. Para el mismo tramo puede utilizar una sección de <b>${seccionRecomendada2[0][2]} mm2</b>, generando una pérdida de <b>${seccionRecomendada2[0][3]}</b>.`

//2. Entre Regulador de Carga y Banco de Baterías (o barra)

var seccionMppt = dimensionadorCable(2, amps, voltBat, 0.01);
document.getElementById('cableMppt').innerHTML = `- La seción de cable recomendada entre el regulador de carga y las baterías (o barra) considerando 2 metros de distancia es de: <b>${seccionMppt[0][2]} mm2 </b>, generando una pérdida de <b>${seccionMppt[0][3]}</b>.`;
 
//3. Entre Baterías (o barra) e Inversor

var seccionInv = dimensionadorCable(2, potenciaInv/voltBat, voltBat, 0.01);
document.getElementById('cableInversor').innerHTML = `- La seción de cable recomendada entre el Inversor y las baterías (o barra) considerando 2 metros de distancia es de: <b>${seccionInv[0][2]} mm2 </b>, generando una pérdida de <b>${seccionInv[0][3]}</b>.. Esta sección considera que el inversor tiene una potencia de ${potenciaInv} Watts y el banco de baterías un voltaje de ${voltBat} Volts.`;


