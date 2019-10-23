'use strict'
window.addEventListener('load', function(){

    var reproductor = document.querySelector('#reproductor');
    var salirVideo = document.querySelector('#salirVideo');
    var siguiente = document.querySelector('#videoSiguiente');;
    var atras = document.querySelector('#videoAnterior');
    var video = document.querySelector('#videoPrincipal');

    var video1 = 'https://www.youtube.com/embed/HryV4awby-k';
    var video2 = 'https://www.youtube.com/embed/WvG_Omgic6w';
    var video3 = 'https://www.youtube.com/embed/L_AGjG8oXlk';
    var video4 = 'https://www.youtube.com/embed/xoerX9HnAY8';
    var video5 = 'https://www.youtube.com/embed/q7h0JiNBupM';
    var video6 = 'https://www.youtube.com/embed/bziLbEqyXeg';
    var video7 = 'https://www.youtube.com/embed/7avRnIJEcEo';
    var video8 = 'https://www.youtube.com/embed/qSwrTLmNYrg';
    var video9 = 'https://www.youtube.com/embed/X2kP2-GzVfY';
    var video10 = 'https://www.youtube.com/embed/EnTOZg0dsi4';
    var video11 = 'https://www.youtube.com/embed/jGW-kip9Bes';
    var video12 = 'https://www.youtube.com/embed/encBzX3ZvjA';
    var video13 = 'https://www.youtube.com/embed/Axqh0awCVgg';
    var video14 = 'https://www.youtube.com/embed/Ll41gDkYLdY';
    var video15 = 'https://www.youtube.com/embed/BJhwyFg98K0';
    var video16 = 'https://www.youtube.com/embed/qXq8xjKzL8w';
    var video17 = 'https://www.youtube.com/embed/5q1igG_19vM';
    var video18 = 'https://www.youtube.com/embed/06eUIzTBPUk';
    var video19 = 'https://www.youtube.com/embed/FWOJsClYFx0';
    var video20 = 'https://www.youtube.com/embed/2BXw594ThWY';

    var videos = [video1, video2, video3, video4, video5,
    video6, video7, video8, video9, video10,
    video11, video12, video13, video14, video15,
    video16, video17, video18, video19, video20];

    var contadorVideo = 0;

    var btnVideo1 = document.querySelector('#clickVideo1');
    var btnVideo2 = document.querySelector('#clickVideo2');
    var btnVideo3 = document.querySelector('#clickVideo3');
    var btnVideo4 = document.querySelector('#clickVideo4');
    var btnVideo5 = document.querySelector('#clickVideo5');
    var btnVideo6 = document.querySelector('#clickVideo6');
    var btnVideo7 = document.querySelector('#clickVideo7');
    var btnVideo8 = document.querySelector('#clickVideo8');
    var btnVideo9 = document.querySelector('#clickVideo9');
    var btnVideo10 = document.querySelector('#clickVideo10');
    var btnVideo11 = document.querySelector('#clickVideo11');
    var btnVideo12 = document.querySelector('#clickVideo12');
    var btnVideo13 = document.querySelector('#clickVideo13');
    var btnVideo14 = document.querySelector('#clickVideo14');
    var btnVideo15 = document.querySelector('#clickVideo15');
    var btnVideo16 = document.querySelector('#clickVideo16');
    var btnVideo17 = document.querySelector('#clickVideo17');
    var btnVideo18 = document.querySelector('#clickVideo18');
    var btnVideo19 = document.querySelector('#clickVideo19');
    var btnVideo20 = document.querySelector('#clickVideo20');


    var btnVideo1E = document.querySelector('#clickVideoE1');
    var btnVideo2E = document.querySelector('#clickVideoE2');
    var btnVideo3E = document.querySelector('#clickVideoE3');
    var btnVideo4E = document.querySelector('#clickVideoE4');
    var btnVideo5E = document.querySelector('#clickVideoE5');
    var btnVideo6E = document.querySelector('#clickVideoE6');
    var btnVideo7E = document.querySelector('#clickVideoE7');
    var btnVideo8E = document.querySelector('#clickVideoE8');
    var btnVideo9E = document.querySelector('#clickVideoE9');
    var btnVideo10E = document.querySelector('#clickVideoE10');
    var btnVideo11E = document.querySelector('#clickVideoE11');
    var btnVideo12E = document.querySelector('#clickVideoE12');
    var btnVideo13E = document.querySelector('#clickVideoE13');
    var btnVideo14E = document.querySelector('#clickVideoE14');
    var btnVideo15E = document.querySelector('#clickVideoE15');
    var btnVideo16E = document.querySelector('#clickVideoE16');
    var btnVideo17E = document.querySelector('#clickVideoE17');
    var btnVideo18E = document.querySelector('#clickVideoE18');
    var btnVideo19E = document.querySelector('#clickVideoE19');
    var btnVideo20E = document.querySelector('#clickVideoE20');

    function elegirVideo(numVideo){
        var numVideo = numVideo;
        video.src = videos[numVideo];
    }


    siguiente.addEventListener('click', function(){
        if(contadorVideo < 19){
            contadorVideo = contadorVideo + 1;
        }else{
            contadorVideo = 0;
        }
        video.src = videos[contadorVideo];
    });

    atras.addEventListener('click', function(){
        if(contadorVideo > 0){
            contadorVideo = contadorVideo - 1;
        }else{
            contadorVideo = 19;
        }
        video.src = videos[contadorVideo];
    });

    btnVideo1.addEventListener('click', function(){
        contadorVideo = 0;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });

    btnVideo2.addEventListener('click', function(){
        contadorVideo = 1;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo3.addEventListener('click', function(){
        contadorVideo = 2;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo4.addEventListener('click', function(){
        contadorVideo = 3;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo5.addEventListener('click', function(){
        contadorVideo = 4;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo6.addEventListener('click', function(){
        contadorVideo = 5;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo7.addEventListener('click', function(){
        contadorVideo = 6;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo8.addEventListener('click', function(){
        contadorVideo = 7;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo9.addEventListener('click', function(){
        contadorVideo = 8;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo10.addEventListener('click', function(){
        contadorVideo = 9;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo11.addEventListener('click', function(){
        contadorVideo = 10;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo12.addEventListener('click', function(){
        contadorVideo = 11;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo13.addEventListener('click', function(){
        contadorVideo = 12;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo14.addEventListener('click', function(){
        contadorVideo = 13;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo15.addEventListener('click', function(){
        contadorVideo = 14;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo16.addEventListener('click', function(){
        contadorVideo = 15;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo17.addEventListener('click', function(){
        contadorVideo = 16;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo18.addEventListener('click', function(){
        contadorVideo = 17;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo19.addEventListener('click', function(){
        contadorVideo = 18;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo20.addEventListener('click', function(){
        contadorVideo = 19;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    





    btnVideo1E.addEventListener('click', function(){
        contadorVideo = 0;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });

    btnVideo2E.addEventListener('click', function(){
        contadorVideo = 1;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo3E.addEventListener('click', function(){
        contadorVideo = 2;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo4E.addEventListener('click', function(){
        contadorVideo = 3;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo5E.addEventListener('click', function(){
        contadorVideo = 4;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo6E.addEventListener('click', function(){
        contadorVideo = 5;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo7E.addEventListener('click', function(){
        contadorVideo = 6;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo8E.addEventListener('click', function(){
        contadorVideo = 7;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo9E.addEventListener('click', function(){
        contadorVideo = 8;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo10E.addEventListener('click', function(){
        contadorVideo = 9;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo11E.addEventListener('click', function(){
        contadorVideo = 10;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo12E.addEventListener('click', function(){
        contadorVideo = 11;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo13E.addEventListener('click', function(){
        contadorVideo = 12;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo14E.addEventListener('click', function(){
        contadorVideo = 13;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo15E.addEventListener('click', function(){
        contadorVideo = 14;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo16E.addEventListener('click', function(){
        contadorVideo = 15;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo17E.addEventListener('click', function(){
        contadorVideo = 16;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo18E.addEventListener('click', function(){
        contadorVideo = 17;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo19E.addEventListener('click', function(){
        contadorVideo = 18;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });
    btnVideo20E.addEventListener('click', function(){
        contadorVideo = 19;
        video.src = videos[contadorVideo];
        reproductor.className = 'reproductorActivo';
    });



    //var ventanaReproductor = document.querySelector('.ventanaReproductor');
    salirVideo.addEventListener('click', function(){
        video.src = 'none';
        reproductor.className = 'reproductorInactivo';
    });
    
});