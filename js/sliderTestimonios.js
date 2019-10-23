'use strict'
window.addEventListener('load', function(){
    var btnAtras = document.querySelector('#btnIzqTes'); ;
    var btnSiguiente = document.querySelector('#btnDerTes');

    var slider = document.querySelector('.subContenedorTestimonios');

    var posicionSlider = 0 ;

    function sumarLeft(){
        if(posicionSlider>-100){
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
        console.log('asdasd');
    });
    btnAtras.addEventListener('click', function(){
        atras();
    });
});