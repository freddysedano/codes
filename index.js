//Estructura FOR IN
//objeto
const persona = {
  nombre: "Carlos ",
  apellido: "Vila solis",
  año: 25
};

let text = ""; //bariables gobales
var i;
for (i in persona) {
  //sentencia a ejecutar por cada propiedad del objeto
  //y lo concatenamos a cada propiedad
  text += persona[i] + " ";
}
console.log(text);
//array
var array = [1, 2, 3, 4];
//igual un array podemos tratar como objeto
for (const i in array) {
  console.log(array[i]);
}
