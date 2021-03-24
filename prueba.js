const arrayCables = [[1.31, 16,1.5],[2.08, 14, 2.5],[3.31, 12, 4],[5.26,10,6],[8.37,8,10],[13.3, 6, 16],[21.2, 4, 25],[33.6, 2, 35],[42.4, 1, 50], [53.3, 1/0, 70],[67.4, '2/0',70],[85,'3/0',95],[107,'4/0',120]];

function dimensionadorCable(distancia, amperaje, voltajeVoc){
    var cablePerdida = [];
    for(var i = 0; i<arrayCables.length;i++){
        if(((2*0.000000017*distancia*amperaje)/((arrayCables[i][2]/100000)*voltajeVoc*0.82))< 0.02){
            cablePerdida.push(arrayCables[i]);
            //le agregamos la pérdida en %.
            cablePerdida[0][3]= (((2*0.000000017*distancia*amperaje)/((arrayCables[i][2]/100000)*voltajeVoc*0.82))*100).toFixed(2)+'%';
            return cablePerdida;
            break;
        }
    }

}
console.log(dimensionadorCable(30,30,100));
console.log(((2*0.000000017*30*30)/((25/100000)*90)));
