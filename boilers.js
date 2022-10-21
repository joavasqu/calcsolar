document.getElementById('hospeNo').addEventListener('change', function(){
    document.getElementById('tipoHospLabel').style.display = 'none';
    document.getElementById('tipoHosp').style.display = 'none' ;
    document.getElementById('camasLabel').style.display = 'none' ;
    document.getElementById('camasCant').style.display = 'none';
    document.getElementById('tipoEstLabel').style.display = 'block';
    document.getElementById('tipoEst').style.display = 'inline' ;
    document.getElementById('usuariosLabel').style.display = 'block';
    document.getElementById('usuarios').style.display = 'inline' ;
}
)
document.getElementById('hospeSi').addEventListener('change', function(){
    document.getElementById('tipoHospLabel').style.display = 'block';
    document.getElementById('tipoHosp').style.display = 'inline' ;
    document.getElementById('camasLabel').style.display = 'inline';
    document.getElementById('camasCant').style.display = 'block';
    document.getElementById('tipoEstLabel').style.display = 'none';
    document.getElementById('tipoEst').style.display = 'none' ;
    document.getElementById('usuariosLabel').style.display = 'none';
    document.getElementById('usuarios').style.display = 'none' ;
}
)