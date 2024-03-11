// Funcion Callback
/*function operacionAsincronica(num1, num2, callback) {
  // Simulamos una operación que toma tiempo
  setTimeout(function () {
    // Llamamos al callback pasándole el resultado de la operación
    callback(num1, num2);
  }, 2000);
}

// Llamamos a la función operacionAsincronica pasando el callback
operacionAsincronica(3, 4, (num1, num2) => {
  console.log(num1 + num2);
});*/

// promesas1
function operacionAsincronicaResta(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 - num2);
      reject("error");
    }, 2000);
  });
}

//promesa 2
function operacionAsincronicaSuma(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
      reject("error");
    }, 5000);
  });
}

// Definimos una función asincrónica para manejar la operación asincrónica
async function manejarOperacionAsincronica() {
  try {
    let resultado2 = await operacionAsincronicaResta(13, 10);
    let resultado1 = await operacionAsincronicaSuma(3, 10);
    console.log(resultado1);
    console.log(resultado2);
  } catch (error) {
    console.log(error);
  }
}

// Llamamos a la función asincrónica
manejarOperacionAsincronica();
