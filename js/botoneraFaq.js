'use strict'
window.addEventListener('load', function(){
   var btn1 = document.querySelector('#btnFaq1');
   var btn2 = document.querySelector('#btnFaq2');
   var btn3 = document.querySelector('#btnFaq3');
   var btn4 = document.querySelector('#btnFaq4');

   var activar = 'filaFaq filaFaqActivo' ;
   var desactivar = 'filaFaq filaFaqInactivo' ;

   var box1 = document.querySelector('#contenedorFaq1');
   var box2 = document.querySelector('#contenedorFaq2');
   var box3 = document.querySelector('#contenedorFaq3');
   var box4 = document.querySelector('#contenedorFaq4');

    var arrow1 = document.querySelector('#arrowFaq1');
    var arrow2 = document.querySelector('#arrowFaq2');
    var arrow3 = document.querySelector('#arrowFaq3');
    var arrow4 = document.querySelector('#arrowFaq4');

    var arrowActivo = 'arrowActivo';
    var arrowInactivo = 'arrowInactivo';


    btn1.addEventListener('click', function(){
        box1.className = activar;
        box2.className = desactivar;
        box3.className = desactivar;
        box4.className = desactivar;

        arrow1.className = arrowActivo;
        arrow2.className = arrowInactivo;
        arrow3.className = arrowInactivo;
        arrow4.className = arrowInactivo;
    });
    btn2.addEventListener('click', function(){
        box2.className = activar;
        box1.className = desactivar;
        box3.className = desactivar;
        box4.className = desactivar;

        arrow2.className = arrowActivo;
        arrow1.className = arrowInactivo;
        arrow3.className = arrowInactivo;
        arrow4.className = arrowInactivo;
    });
    btn3.addEventListener('click', function(){
        box3.className = activar;
        box1.className = desactivar;
        box2.className = desactivar;
        box4.className = desactivar;

        arrow3.className = arrowActivo;
        arrow2.className = arrowInactivo;
        arrow1.className = arrowInactivo;
        arrow4.className = arrowInactivo;
    });
    btn4.addEventListener('click', function(){
        box4.className = activar;
        box1.className = desactivar;
        box2.className = desactivar;
        box3.className = desactivar;

        arrow4.className = arrowActivo;
        arrow2.className = arrowInactivo;
        arrow1.className = arrowInactivo;
        arrow3.className = arrowInactivo;
    });
});