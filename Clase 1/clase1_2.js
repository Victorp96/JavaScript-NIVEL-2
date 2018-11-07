function cambiarTitulo(){
    var titulo = window.document.getElementById("titulo");
    if (titulo!=undefined)
        titulo.innerHTML="Victor Perez";
    else
        console.log("no encontre el id titulo");
}

var caja = window.document.getElementById("caja-inclinada");
caja.style.backgroundColor="yellow"
caja.innerHTML+="Victor Perez"