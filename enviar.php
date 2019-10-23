<?php



	$destino="consulta@aviveterinaria.com.ar";



	$nombre=$_POST["nombre"];



	$email=$_POST["email"];


    $telefono=$_POST["telefono"];


	$asunto=$_POST["asunto"];



	$contenido="Nombre: " . $nombre .  "\nemail: " . $email . "\nTeleofono: " . $telefono . "\nAsunto: " . $asunto;



	mail($destino, $asunto, $contenido);



	header("Location:enviado.html");



?>