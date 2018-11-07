function cambiarTitulo(){
    var titulo = window.document.getElementById("Titulo");
    if (titulo!=undefined)
        titulo.innerHTML="Victor Perez";
    else
        console.log("No encontre el id titulo");
}