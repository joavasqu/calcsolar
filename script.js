


let voc = document.getElementById('Voc').value;
let temp = document.getElementById('tempMin').value;
let boton = document.getElementById('calcVoc');
let resultado = document.getElementById('resultado');
let mppt = document.getElementById('mppt');
let mpptH2 = document.getElementById('mppth2');



function vocMax(){
    let controlador = '';
    let potencia = document.getElementById('potenciaPanel').value;
    let voc = document.getElementById('Voc').value;
    let temp = document.getElementById('tempMin').value;
    let string = document.getElementById('cantSerie').value;
    let cantString = document.getElementById('cantString').value;
    let voltBat = document.getElementById('voltBat').value;
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
        } else{
            amps = "ERROR EN VOLTAJE DE BATERÍAS";
        }

    //Determinación del voltaje de entrada adecuado para el MPPT.

    if(vocMax < 100){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 100V.';
    } else if (vocMax < 150){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 150V.';
    } else if (vocMax < 200){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 200V.';
    } else if (vocMax < 250){
        controlador = 'Se puede utilizar un controlador MPPT con Voltaje máximo de entrada de 250V.';
    } else {
        controlador = '<b>NO HAY DISPONIBLES</b> controladores de carga MPPT para voltajes de entrada superiores a 250V';
    }
    
    resultado.innerHTML = `El Voc máx para una temperatura de ${temp} °C es de <b>${vocMax} Volts</b> si consideramos un <em>Voltage temperature coefficient</em> de -0,33%/°C`;
    mpptH2.style.display = 'block';
    mppt.innerHTML = controlador +` El controlador debe tener una capacidad de carga igual o mayor a ${amps} A`;

}




boton.addEventListener('click', vocMax);

const array = [{modelo: "Tracer2015", ventrada: 150, capacidad: 20},{modelo: "Tracer5020", ventrada: 200, capacidad: 50}];