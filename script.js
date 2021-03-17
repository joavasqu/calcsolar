


let voc = document.getElementById('Voc').value;
let temp = document.getElementById('tempMin').value;
let boton = document.getElementById('calcVoc');
let resultado = document.getElementById('resultado');
let mppt = document.getElementById('mppt');
let mpptH2 = document.getElementById('mppth2');
let mpptadecuado = document.getElementById('mpptadecuado');
let mpptTodosAdecuados = document.getElementById('todosmpptadecuado');



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
    
    var mpptAdecuado = eleccionModeloMppt(vocMax, amps, arrayMppt, voltBat);
    var mpptTodos = eleccionModeloMpptTodos(vocMax, amps, arrayMppt, voltBat);

    
    resultado.innerHTML = `El Voc máx para una temperatura de ${temp} °C es de <b>${vocMax} Volts</b> si consideramos un <em>Voltage temperature coefficient</em> de -0,33%/°C`;
    mpptH2.style.display = 'block';
    mppt.innerHTML = controlador +` El controlador debe tener una capacidad de carga igual o mayor a ${amps} A. `;
    document.getElementById("textoMpptAdecuado").style.display = 'block';
    mpptadecuado.innerHTML = `Se recomiendan el modelo <b>${mpptAdecuado}</b>`;
    document.getElementById("textoTodosMpptAdecuado").style.display = 'block';
    mpptTodosAdecuados.innerHTML = mpptTodos;
    

}
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


boton.addEventListener('click', vocMax);

const arrayMppt = [{modelo: "Tracer2210BN", ventrada: 100, capacidad: 20, maxvoltbateria: 24},
                    {modelo: "Tracer3210BN", ventrada: 100, capacidad: 30 ,maxvoltbateria: 24},
                    {modelo: "Tracer4210AN", ventrada: 100, capacidad: 40 ,maxvoltbateria: 24},
                    {modelo: "Tracer4215BN", ventrada: 150, capacidad: 40 ,maxvoltbateria: 24},
                    {modelo: "Tracer5415AN", ventrada: 150, capacidad: 50 ,maxvoltbateria: 48},
                    {modelo: "Tracer10415AN", ventrada: 150, capacidad: 100 ,maxvoltbateria: 48},
                    {modelo: "Tracer5420AN", ventrada: 200, capacidad: 50 ,maxvoltbateria: 48},
                    {modelo: "Tracer8420AN", ventrada: 200, capacidad: 80 ,maxvoltbateria: 48}
                ];