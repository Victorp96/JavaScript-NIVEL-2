var notas=[null,true,20,18];
var nombres=[null,"Victor Perez", "Jose Luis","Andrea"]

console.log(nombres);
console.log(nombres.toString())
alert(nombres)

for (let i=0;i<=3;i++){
    console.log("nombre: ",nombres[i])
    console.log("Nota: ",notas[i])
}

nombres.push("maria");
nombres.shift(); //agrega al primer elemento
alert(nombres)
console.log("notas[0]")