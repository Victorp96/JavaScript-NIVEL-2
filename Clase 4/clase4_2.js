var nombres=[];
var notas=[];

document.form1.boton.onclick= function(){
    var nombre = document.form1.nombre;
    var nota = document.form1.nota;


    nombres.push(nombre.value);
    notas.push(nota.value);

    //pop elimina el ultimo del arreglo
    // nombres.pop(nombre.value);
    // notas.pop(nota.value);

    //Unshift Agrega al inicio del arreglo
    // nombres.unshift(nombre.value);d
    // notas.unshift(nota.value);

    console.log(nombres);
    console.log(notas);

    nombre.value="";
    nota.value="";

    lista(nombres,notas)
}

function lista(nombres,notas){
    var listado=document.getElementById("listado")
    listado.innerHTML="";
    listado.innerHTML+="<h1>Listado de alumnos:</h1><br>"
    for (let i = 0; i < nombres.length; i++) {
        listado.innerHTML+=(i+1) +"- <strong>Nombre:</strong> "+nombres[i]+" | <strong>Nota:</strong> "+notas[i]+"<br>";
    }
}

