export const arrayMppt = [{modelo: "Tracer2210BN", ventrada: 100, capacidad: 20, maxvoltbateria: 24},
                    {modelo: "Tracer3210BN", ventrada: 100, capacidad: 30 ,maxvoltbateria: 24},
                    {modelo: "Tracer4210AN", ventrada: 100, capacidad: 40 ,maxvoltbateria: 24},
                    {modelo: "Tracer4215BN", ventrada: 150, capacidad: 40 ,maxvoltbateria: 24},
                    {modelo: "Tracer5415AN", ventrada: 150, capacidad: 50 ,maxvoltbateria: 48},
                    {modelo: "Tracer10415AN", ventrada: 150, capacidad: 100 ,maxvoltbateria: 48},
                    {modelo: "Tracer5420AN", ventrada: 200, capacidad: 50 ,maxvoltbateria: 48},
                    {modelo: "Tracer8420AN", ventrada: 200, capacidad: 80 ,maxvoltbateria: 48},
                    {modelo: "EPEVER UPOWER HI 48/5000", ventrada: 450, capacidad: 80, maxvoltbateria: 48}
                ];

//Este arreglo de cables está compuesto así [medida en mm2 del AWG, AWG, equivalente más cercano en mm2, Max Amperaje según norma chilena NCH Elec 4/2003]

export const arrayCables = [
    [1.31, 16,1.5, 15] ,
    [2.08, 14, 2.5, 20],
    [3.31, 12, 4, 25],
    [5.26,10,6, 33],
    [8.37,8,10, 45],
    [13.3, 6, 16, 61],
    [21.2, 4, 25, 83],
    [33.6, 2, 35, 103],
    [42.4, 1, 50, 132], 
    [53.3, 1/0, 70, 164],
    [67.4, '2/0',70, 164],
    [85,'3/0',95, 197],
    [107,'4/0',120, 235]];

export const arrayRad = [
    {mes: 'Enero', radiacion:149},
    {mes: 'Febrero', radiacion:120},
    {mes: 'Marzo', radiacion:105},
    {mes: 'Abril', radiacion:67},
    {mes: 'Mayo', radiacion:42},
    {mes: 'Junio', radiacion:22.5},
    {mes: 'Julio', radiacion:31},
    {mes: 'Agosto', radiacion:54.6},
    {mes: 'Septiembre', radiacion:83.6},
    {mes: 'Octubre', radiacion:112.4},
    {mes: 'Noviembre', radiacion:151},
    {mes: 'Diciembre', radiacion:161}
];

export const arregloPv = [
    {potencia:0.275 , enSerie:1 , enParalelo:1 ,vocMax:44.79 , vmp:31.7 ,panel: '275W'},
    {potencia:0.335 , enSerie:1 , enParalelo:1 ,vocMax:52.83 , vmp:38.13 ,panel: '335W'},
    {potencia:0.55 , enSerie:2 , enParalelo:1 ,vocMax:89.58 , vmp:63.4 ,panel: '275W'},
    {potencia:0.825 , enSerie:3 , enParalelo:1 ,vocMax:134.37 , vmp:95.1 ,panel: '275W'},
    {potencia:1.05 , enSerie:3 , enParalelo:1 ,vocMax:158.9 , vmp:114.39 ,panel: '335W'},
    {potencia:1.65 , enSerie:3 , enParalelo:2 ,vocMax:134.37 , vmp:95.1 ,panel: '275W'},
    {potencia:2.1 , enSerie:3 , enParalelo:2 ,vocMax:158.9 , vmp:114.39 ,panel: '335W'},
    {potencia:2.475 , enSerie:3 , enParalelo:3 ,vocMax:134.37 , vmp:95.1 ,panel: '275W'},
    {potencia:3.015 , enSerie:3 , enParalelo:3 ,vocMax:158.9 , vmp:114.39 ,panel: '335W'},
    {potencia:3.3 , enSerie:3 , enParalelo:4 ,vocMax:134.37 , vmp:95.1 ,panel: '275W'},
    {potencia:4.2 , enSerie:3 , enParalelo:4 ,vocMax:158.9 , vmp:114.39 ,panel: '335W'},
    {potencia:6.03 , enSerie:3 , enParalelo:6 ,vocMax:158.9 , vmp:114.39 ,panel: '335W'},
    {potencia:8.04 , enSerie:3 , enParalelo:8 ,vocMax:158.9 , vmp:114.39 ,panel:'335W'},
];

export const arregloBatLitio = [
    {nombre:'1x100Ah-12V' , capacidad:1.2 , voltaje:12 ,enSerie:1 , enParalelo:1 , bateria:'LIFEPO 100AH-12V' },
    {nombre:'2x100Ah-12V' , capacidad:2.4 , voltaje:12 ,enSerie:1 , enParalelo:2 , bateria:'LIFEPO 100AH-12V' },
    {nombre:'2x100Ah-12V' , capacidad:2.4 , voltaje:24 ,enSerie:2 , enParalelo:1 , bateria:'LIFEPO 100AH-12V' },
    {nombre:'3x100Ah-12V' , capacidad:3.6 , voltaje:12 ,enSerie:1 , enParalelo:3 , bateria:'LIFEPO 100AH-12V' },
    {nombre:'4x100Ah-12V' , capacidad:4.8 , voltaje:24 ,enSerie:2 , enParalelo:2 , bateria:'LIFEPO 100AH-12V' },
    {nombre:'4x100Ah-12V' , capacidad:4.8 , voltaje:48 ,enSerie:4 , enParalelo:2 , bateria:'LIFEPO 100AH-12V' },
    {nombre:'1x50Ah-48V' , capacidad:2.4 , voltaje:12 ,enSerie:1 , enParalelo:1 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'2x50Ah-48V' , capacidad:4.8 , voltaje:48 ,enSerie:1 , enParalelo:2 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'3x50Ah-48V' , capacidad:7.2 , voltaje:48 ,enSerie:1 , enParalelo:3 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'4x50Ah-48V' , capacidad:9.6 , voltaje:48 ,enSerie:1 , enParalelo:4 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'5x50Ah-48V' , capacidad:12 , voltaje:48 ,enSerie:1 , enParalelo:5 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'6x50Ah-48V' , capacidad:14.4 , voltaje:48 ,enSerie:1 , enParalelo:6 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'7x50Ah-48V' , capacidad:16.8 , voltaje:48 ,enSerie:1 , enParalelo:7 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'8x50Ah-48V' , capacidad:19.2 , voltaje:48 ,enSerie:1 , enParalelo:8 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'9x50Ah-48V' , capacidad:21.6 , voltaje:48 ,enSerie:1 , enParalelo:9 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'10x50Ah-48V' , capacidad:24.4 , voltaje:48 ,enSerie:1 , enParalelo:10 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'11x50Ah-48V' , capacidad:26.8 , voltaje:48 ,enSerie:1 , enParalelo:11 , bateria:'LIFEPO 50AH-48V RACK' },
    {nombre:'11x50Ah-48V' , capacidad:29.2 , voltaje:48 ,enSerie:1 , enParalelo:12 , bateria:'LIFEPO 50AH-48V RACK' },   
];

export const arregloBatAcido = [

];

export const arregloInteracumuladores = [
{nombre:'300L', potenciaSerp:40, capacidad:300},
{nombre:'500L', potenciaSerp:50, capacidad:500},
{nombre:'1000L', potenciaSerp:90, capacidad:1000},
];

export const arregloEstablecimientos = [
{nombre:'Hotel 5 Estrellas', cantAcsxCama:70 , factorUso:0.5},
{nombre:'Hotel 4 Estrellas', cantAcsxCama:70 , factorUso:0.5},
{nombre:'Hotel 3 Estrellas', cantAcsxCama:55 , factorUso:0.5},
{nombre:'Hotel 2 Estrellas', cantAcsxCama:40 , factorUso:0.5},
{nombre:'Gimnasio', cantAcsxCama:25 , factorUso:0.35},
{nombre:'Ducha Colectiva', cantAcsxCama:20 , factorUso:0.35}
];