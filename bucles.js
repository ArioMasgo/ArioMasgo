var estudiantes = ["Luis","Juan","Rosa","Pedro"];

function saludar(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for (let index = 0; index < estudiantes.length; index++) {
    saludar(estudiantes[index]);
}
//otra manera
for(var estudiante of estudiantes){
    saludar(estudiante);
}
//otra manera
estudiantes.forEach(element => {
    saludar(element);
});



//Whileee


var alumnos =["mario","rosa","elias","chio"];

function saludarAlumno(alumnos){
    console.log(`Hola, ${alumnos}`);
}

while(alumnos.length>0){
    console.log(alumnos);
    let alumno = alumnos.shift();
    saludarAlumno(alumno);
}

function fibonaci(n){
  var x=0;
  var y=1;
  var z=0;
  console.log(y);
  var arr=[]
  for(var i = 1 ; i<n ; i++){
    z=x+y
    console.log(x + " + " +y +" = "+ z)
    x=y
    y=z
  }
  return 
}

function FibonaciVec(n){
  var arr = [];
  arr[0]=0;
  arr[1]=1;
  for (let i =2; i<n; i++){
    arr[i] = arr[i-2] + arr[i-1]
  }
  return arr;
}
FibonaciVec(13)
fibonaci(13)