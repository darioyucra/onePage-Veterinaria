'use strict'
window.addEventListener('load', function(){
    var btnMenuAbrir = document.querySelector('#menuAbrir');
    var btnMenuCerrar = document.querySelector('#cerrarMenu');

    var menu = document.querySelector('#contenedorMenu');

    var cerrarMenu = 'contenedorMenu contenedorMenuInactivo';
    var abrirMenu = 'contenedorMenu contenedorMenuActivo';
    var inicialMenu = 'contenedorMenu contenedorMenuInicial';

    btnMenuAbrir.addEventListener('click', function(){
        console.log('funca el boton');
        if(menu.className == cerrarMenu || menu.className == inicialMenu){
            menu.className = abrirMenu;
        }else{
            menu.className = cerrarMenu;
        }
    });
    btnMenuCerrar.addEventListener('click', function(){
        menu.className = cerrarMenu;
    });

    /*guardo los botones del menu*/
    var opcionesMenu = document.querySelectorAll('.opcionMenu');
    function borrarColorMenu(){
        for(var i=0; i<opcionesMenu.length; i++){
            opcionesMenu[i].id = '';
        }
    }
    opcionesMenu[0].addEventListener('click', function(){
        borrarColorMenu();
        opcionesMenu[0].id = 'btnActivo';
    });
    opcionesMenu[1].addEventListener('click', function(){
        borrarColorMenu();
        opcionesMenu[1].id = 'btnActivo';
    });
    opcionesMenu[2].addEventListener('click', function(){
        borrarColorMenu();
        opcionesMenu[2].id = 'btnActivo';
    });
    opcionesMenu[3].addEventListener('click', function(){
        borrarColorMenu();
        opcionesMenu[3].id = 'btnActivo';
    });
    opcionesMenu[4].addEventListener('click', function(){
        borrarColorMenu();
        opcionesMenu[4].id = 'btnActivo';
    });

    var btnInicio = document.querySelector('#btnInicio');
    var btnServicios = document.querySelector('#btnServicios');
    var btnPet = document.querySelector('#btnPet');
    var btnVideos = document.querySelector('#btnVideos');
    var btnVideosM = document.querySelector('#btnVideosM');
    var btnContacto = document.querySelector('#btnContacto');
    var videoEnlace = document.querySelector('#videosEnlace');

    var botonesMenu = [btnInicio, btnServicios, btnPet, btnVideos, btnContacto];



    for(var x=0; x < botonesMenu.length; x++){
        if (screen.width < 1024){
        videoEnlace.href = "#youtubeM";
        botonesMenu[x].addEventListener('click', function(){
            menu.className = cerrarMenu;
        });
    }
    }

});