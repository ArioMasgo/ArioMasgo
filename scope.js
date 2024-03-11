let miNombre = "diego"; //Scope Global

function nombre (){
    var miApellido = "de tingo"; //Scope Local
    console.log(miNombre+" "+miApellido);
}

nombre();