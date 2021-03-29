// Se cambia la aparición de la pregunta 2.1

document.getElementById('tvNo').addEventListener('change', function(){
    document.getElementById('cantTvLabel').style.display = 'none';
    document.getElementById('cantTv').style.display = 'none' ;
}
)
document.getElementById('tvSi').addEventListener('change', function(){
    document.getElementById('cantTvLabel').style.display = 'block';
    document.getElementById('cantTv').style.display = 'inline' ;
}
)




