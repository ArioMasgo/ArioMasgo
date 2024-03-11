var num =1
switch (num) {
    case 1:
        console.log("soy el uno");
        break;
    case 2:
        conaole.log("soy el 2");
    default:
        console.log("no soy nada");
        break;
}

//reto piedra papel o tijera 

var compu = "tijera";
var usuario = "papel";

var tijera = "tijera";
var papel = "papel";
var piedra = "piedra"; 

switch (true) {
    case compu == tijera  && usuario == piedra:
        console.log("Ganaste!!!!");
        break;
    case compu == piedra  && usuario == papel:
        console.log("Ganaste!!!!");
        break;
    case compu == papel && usuario == tijera:
        console.log("Ganaste!!!!");
        break;
    case compu == usuario:
        console.log("Empaatess!!!!");
    default:
        console.log("Perdiste!!!!");
        break;
}