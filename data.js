export const arrayMppt = [{modelo: "Tracer2210BN", ventrada: 100, capacidad: 20, maxvoltbateria: 24},
                    {modelo: "Tracer3210BN", ventrada: 100, capacidad: 30 ,maxvoltbateria: 24},
                    {modelo: "Tracer4210AN", ventrada: 100, capacidad: 40 ,maxvoltbateria: 24},
                    {modelo: "Tracer4215BN", ventrada: 150, capacidad: 40 ,maxvoltbateria: 24},
                    {modelo: "Tracer5415AN", ventrada: 150, capacidad: 50 ,maxvoltbateria: 48},
                    {modelo: "Tracer10415AN", ventrada: 150, capacidad: 100 ,maxvoltbateria: 48},
                    {modelo: "Tracer5420AN", ventrada: 200, capacidad: 50 ,maxvoltbateria: 48},
                    {modelo: "Tracer8420AN", ventrada: 200, capacidad: 80 ,maxvoltbateria: 48}
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