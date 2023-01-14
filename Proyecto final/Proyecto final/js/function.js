//Interación con los botones (nombre,contacto,fecha,correo,numero de celular y ubicacion)

document.getElementById('nombre').onclick= function(){
    document.getElementById('titulo_de_informacion').innerHTML= "Hola, Mi nombre es: ";
    document.getElementById('informacion_a_mostrar').innerHTML= "Serenity Cruz ";
}
document.getElementById('correo').onclick= function(){
    document.getElementById('titulo_de_informacion').innerHTML= "Mi correo es: "
    document.getElementById('informacion_a_mostrar').innerHTML= "serenity.cruz@example.com "
}
document.getElementById('fecha').onclick= function(){
    document.getElementById('titulo_de_informacion').innerHTML= "Mi fecha de cumpleaño es : "
    document.getElementById('informacion_a_mostrar').innerHTML= "2/4/1999"
}
document.getElementById('contacto').onclick= function(){
    document.getElementById('titulo_de_informacion').innerHTML= "Mi numero de celular es: "
    document.getElementById('informacion_a_mostrar').innerHTML= "(724) 342-7265"
}
document.getElementById('ubicacion').onclick= function(){
    document.getElementById('titulo_de_informacion').innerHTML= "Mi ubicacion es: "
    document.getElementById('informacion_a_mostrar').innerHTML= "2270 Karen Dr"
}

// ocultar o desocultar la informacion adicionales (Lenguaje de Programacion, Habilidades, Idioma)

document.getElementById("boton_de_conocimiento").onclick= function(){
    if(document.getElementById("programacion").style.display=="inline")
    document.getElementById("programacion").style.display="none";
    else{
        document.getElementById("programacion").style.display="inline";
    }
}

document.getElementById("boton_de_habilidades").onclick= function(){
    if(document.getElementById("actitudes").style.display=="inline")
    document.getElementById("actitudes").style.display="none";
    else{
        document.getElementById("actitudes").style.display="inline";
    }
}

document.getElementById("boton_de_idioma").onclick= function(){
    if(document.getElementById("idiomas").style.display=="inline")
    document.getElementById("idiomas").style.display="none";
    else{
        document.getElementById("idiomas").style.display="inline";
    }
}