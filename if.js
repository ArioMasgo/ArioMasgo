//condicionales

var edad =18;

if (edad==18) {
    console.log("Mi primera votacion");
}else if(edad>18){
    console.log("toca votar");
}else{
    console.log("no puedes votar");
}

//tipo de condicional abrevidado
condition ? true : false;

var numero =1;
var resultado = numero ===1 ? "numero 1" : "numero 2";


//ejemplo de piedra papel y tijera

var compu = "tijera";
var usuario = "papel";

var tijera = "tijera";
var papel = "papel";
var piedra = "piedra"; 

if (compu == tijera  && usuario == piedra) {
    console.log("Gana usuario");
}else if(compu == piedra  && usuario == papel){
    console.log("Gana usuario");
}else if(compu == papel  && usuario == tijera){
    console.log("Gana usuario");
}else if(compu == usuario){
    console.log("Tablas..");
}else{
    console.log("Gana la computadora"); 
}

