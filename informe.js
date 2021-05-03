const datos = new URLSearchParams(window.location.search);

var tablaCobertura = datos.get('');
document.getElementById('tabla').innerHTML = tablaCobertura;

console.log(tablaCobertura);