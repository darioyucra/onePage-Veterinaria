'use strict'
window.addEventListener('load', function(){
    // animacion burbuja slider
    
    var burbuja1 = document.querySelector('#imgBurbuja1');
    var burbuja2 = document.querySelector('#imgBurbuja2');
    var burbuja3 = document.querySelector('#imgBurbuja3');
    var burbuja4 = document.querySelector('#imgBurbuja4');

    var burbujas = [burbuja1, burbuja2, burbuja3, burbuja4];

    var contador = 0;

    function ocultarBurbuja(){
        for(var i=0; i<burbujas.length; i++){
            burbujas[i].className = 'burbujaInactiva';
        }
    }

   function burbujaAutomatico(){
        var iterarBurbuja = setInterval(function(){
            ocultarBurbuja();
            burbujas[contador].className = 'burbujaActiva';
            if(contador<3){
                contador++;
            }else{
                contador=0;
            }
        }, 3500);
        return iterarBurbuja;
    }
    
 burbujaAutomatico();
});