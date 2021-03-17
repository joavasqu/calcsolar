let voc = document.getElementById('Voc').value;
let temp = document.getElementById('tempMin').value;
let boton = document.getElementById('calcVoc');
let resultado = document.getElementById('resultado');
let mppt = document.getElementById('mppt');
let mpptH2 = document.getElementById('mppth2')



function vocMax(){
    let controlador = '';
    let voc = document.getElementById('Voc').value;
    let temp = document.getElementById('tempMin').value;
    let string = document.getElementById('cantSerie').value;
    let vocMax = voc * (1+(temp - 25)*-0.33/100)*string;
    vocMax = vocMax.toFixed(2);

    if(vocMax < 100){
        controlador = 'Se puede utiliza un controlador MPPT con Voltaje máximo de entrada de 100V.';
    } else if (vocMax < 150){
        controlador = 'Se puede utiliza un controlador MPPT con Voltaje máximo de entrada de 150V.';
    } else if (vocMax < 200){
        controlador = 'Se puede utiliza un controlador MPPT con Voltaje máximo de entrada de 200V.';
    } else if (vocMax < 250){
        controlador = 'Se puede utiliza un controlador MPPT con Voltaje máximo de entrada de 250V.';
    } else {
        controlador = '<b>NO HAY DISPONIBLES</b> controladores de carga MPPT para voltajes de entrada superiores a 250V';
    }
    
    resultado.innerHTML = `El Voc máx para una temperatura de ${temp} °C es de <b>${vocMax} Volts</b> si consideramos un <em>Voltage temperature coefficient</em> de -0,33%/°C`;
    mpptH2.style.display = 'block';
    mppt.innerHTML = controlador;

}


boton.addEventListener('click', vocMax);