'use strict'
window.addEventListener('load', function(){
    var btnAtras = document.querySelector('#btnServiciosIzq'); ;
    var btnSiguiente = document.querySelector('#btnServiciosDer');

    var slider = document.querySelector('#slideServicios');

    var posicionSlider = 0 ;

    function sumarLeft(){
        if(posicionSlider>-300){
            posicionSlider = posicionSlider - 100;
        }
        console.log(posicionSlider);
    }
    function restarLeft(){
        if(posicionSlider<0){
            posicionSlider = posicionSlider + 100;
        }
        console.log(posicionSlider);
    }
    function siguiente(){
        sumarLeft();
        slider.style.marginLeft =  posicionSlider.toString() + '%';
    }

    function atras(){
        restarLeft();
        slider.style.marginLeft =  posicionSlider.toString() + '%';
    }
    btnSiguiente.addEventListener('click', function(){
        siguiente();
    });
    btnAtras.addEventListener('click', function(){
        atras();
    });
});