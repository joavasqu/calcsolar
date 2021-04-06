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

var consumo = calcularConsumoMensual();


// El consumo total mensual en HTML en la página de resultado
let consumoHtml = document.getElementById('consumo');
// Arreglo 1
let arreglo1 = document.getElementById('arreglo1');

// Acá ponemos los resultados:

consumoHtml.innerHTML = `El consumo mensual calculado es de: <b>${consumo} kWh</b>`;