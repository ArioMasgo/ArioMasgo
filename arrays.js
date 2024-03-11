var frutas =["pera","uva","fresa","piña",[1,3,4]];

console.log(frutas.length);//la longitud del vector
var masfrutas = frutas.push("manzana"); //agrega un elemento al final del array
var ultimo = frutas.pop("manzana"); // elemina el ultimo elemento del array
var primero = frutas.unshift("naranja");//agrega elemento en la primera posicion del array
var eliminarprimer = frutas.shift("naranja");//elimina el primer elemento del array
var posicion = frutas.indexOf("uva"); //retorna la posicion del elemento

//Otros ejemplos

var colores = ["rojo", "azul", "verde", "amarillo"];

//Reverse, metodo que establece que el array invierte los elementos
colores.reverse();
["amarillo", "verde", "azul", "rojo", "anaranjado"]

//Sort, metodo para ordenar alfabeticamente los array con datos de tipo String
colores.sort();
["amarillo", "anaranjado", "azul", "rojo", "verde"]

//Slice, método que puede contener uno o dos argumentos, que indiquen el inicio y parada de posiciones, pues devuelve los elementos contenidos en el array, de acuerdo a los argumentos indicados, por ejemplo si a colores, le agregamos colores.slice(1,3); obtendremos los que se encuentran en la posición 1, 2
colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"]
colores.slice(1,3);
["anaranjado", "azul"]

//Si solo se indica un argumento se tomará como inicio ese argumento y como final la última posición, entonces si usamos:

colores.slice(2);
["azul", "rojo", "verde"]


function Invertir_array() {
  var array = [2, 4, 5, 1, 3, 4,"hola"];
  var newarray = [];
  for (var i = 0; array.length / 2 > i; i++) {
    const temp = array[array.length - 1 - i];
    const temp2 = array[i];
    array[i] = temp;
    array[array.length - 1 - i] = temp2
  }

  return array
}
holis();