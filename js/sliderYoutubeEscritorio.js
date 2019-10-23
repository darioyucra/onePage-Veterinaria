'use strict'
window.addEventListener('load', function(){
   var btn1 = document.querySelector('#circle1');
   var btn2 = document.querySelector('#circle2');
   var btn3 = document.querySelector('#circle3');
   var btn4 = document.querySelector('#circle4');
   var btn5 = document.querySelector('#circle5');
   
   var slider = document.querySelector('#videoEscritorio');



   btn1.addEventListener('click', function(){
       slider.style.marginLeft = '0';
       btn1.className = 'circleActive';
       btn2.className = '';
       btn3.className = '';
       btn4.className = '';
       btn5.className = '';
   });

   btn2.addEventListener('click', function(){
    slider.style.marginLeft = '-100%';
        btn2.className = 'circleActive';
        btn1.className = '';
        btn3.className = '';
        btn4.className = '';
        btn5.className = '';
    });

    btn3.addEventListener('click', function(){
        slider.style.marginLeft = '-200%';
        btn3.className = 'circleActive';
       btn1.className = '';
       btn2.className = '';
       btn4.className = '';
       btn5.className = '';
    });

    btn4.addEventListener('click', function(){
     slider.style.marginLeft = '-300%';
     btn4.className = 'circleActive';
       btn1.className = '';
       btn2.className = '';
       btn3.className = '';
       btn5.className = '';
     });

     btn5.addEventListener('click', function(){
        slider.style.marginLeft = '-400%';
        btn5.className = 'circleActive';
       btn1.className = '';
       btn2.className = '';
       btn3.className = '';
       btn4.className = '';
        });

   /*var posicionSlider = 0 ;

   function sumarLeft(){
       if(posicionSlider>-1900){
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
   });*/
});