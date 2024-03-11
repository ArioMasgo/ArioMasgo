/* var miAuto ={
    marca: "toyota",
    modelo: "Yaris",
    precio: 2020,

    detalleAuto : function(){   // funcion como atributo de clase
        console.log(`Auto ${this.modelo} ${this.precio}`);
    }
};
miAuto.marca;
miAuto.detalleAuto();
 */
//Constructor
var auto= {
    marca:"",
    modelo:"",
    precio:0,
   
}

function auto(marca,modelo,precio){
    this.marca =marca;
    this.modelo=modelo;
    this.precio=precio;
}

/* var autoNuevo = new auto("Audi","model depor",2020);
var autoNuevo1 = new auto("tesla","model depor",2022); */

//reto
var num = 15;

var min = 1718;
var max = 3429;

var marca = "ferrary";
var modelo = "Spezia";
var precio = 0;


var autonew=[];
for (let i = 0; i < num; i++) {
    precio = Math.floor(Math.random()*(max-min+1)+min);// numeros aleatorios
    autonew.push(new auto(marca,modelo,precio));
}

function muestra(){
    for (let i = 0; i < autonew.length; i++) {
        console.log(`Auto ${autonew[i].modelo} del año ${autonew[i].precio}`);   
    }
}

//retorna solo las marcas 
var nombre_de_autos = autonew.map(function(autonew){
    return autonew.marca;
});


var todos_precios_menor_de_2000 = autonew.filter(function(autonew){
    return autonew.precio <= 2000;
});

console.log(muestra());
 