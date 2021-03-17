function eleccionModeloMppt(maxVoc, ampsMax, arregloControladores){
    var modelos = [];
    for(var i=0; i<arregloControladores.length;i++){
        if(arregloControladores[i].ventrada > maxVoc && arregloControladores[i].capacidad > ampsMax){
            modelos.push(arregloControladores[i].modelo);
           
        }
    }
    return modelos;
}


const array = [{modelo: "Tracer2015", ventrada: 150, capacidad: 20},{modelo: "Tracer5020", ventrada: 200, capacidad: 50}];


console.log(eleccionModeloMppt(120,20,array));
