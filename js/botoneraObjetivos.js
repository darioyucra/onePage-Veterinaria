'use strict'
window.addEventListener('load', function(){
   var btn1 = document.querySelector('#btnObjetivos1');
   var btn2 = document.querySelector('#btnObjetivos2');
   var btn3 = document.querySelector('#btnObjetivos3');

   var activar = 'opcionBotonera btnObjetivosActivo' ;
   var desactivar = 'opcionBotonera btnObjetivosInactivo' ;

   var box1 = document.querySelector('#opcionBotonera1');
   var box2 = document.querySelector('#opcionBotonera2');
   var box3 = document.querySelector('#opcionBotonera3');

    var arrow1 = document.querySelector('#arrowObjetivo1');
    var arrow2 = document.querySelector('#arrowObjetivo2');
    var arrow3 = document.querySelector('#arrowObjetivo3');

    var arrowActivo = 'arrowActivo';
    var arrowInactivo = 'arrowInactivo';


    btn1.addEventListener('click', function(){
        box1.className = activar;
        box2.className = desactivar;
        box3.className = desactivar;

        arrow1.className = arrowActivo;
        arrow2.className = arrowInactivo;
        arrow3.className = arrowInactivo;
    });
    btn2.addEventListener('click', function(){
        box2.className = activar;
        box1.className = desactivar;
        box3.className = desactivar;

        arrow2.className = arrowActivo;
        arrow1.className = arrowInactivo;
        arrow3.className = arrowInactivo;
    });
    btn3.addEventListener('click', function(){
        box3.className = activar;
        box1.className = desactivar;
        box2.className = desactivar;

        arrow3.className = arrowActivo;
        arrow2.className = arrowInactivo;
        arrow1.className = arrowInactivo;
    });
});