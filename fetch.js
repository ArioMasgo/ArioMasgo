let url = "https://jsonplaceholder.typicode.com";

// GET
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json));

//POST: enviar informacion
let requestBody = {
  title: "Lorito es mas tranquilo",
  body: "!Quiero morder un dedo!",
  userId: 1,
};
fetch(`${url}/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json ; charset=UTF-8",
  },
  body: JSON.stringify(requestBody),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//PUT: actualizar o editar informacion
let requestBody2 = {
  id: 100,
  title: "Lorito es mas tranquilo",
  body: "!Quiero morder un dedo!",
  userId: 1,
};
let posteo = 5;

fetch(`${url}/posts/${posteo}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json ; charset=UTF-8",
  },
  body: JSON.stringify(requestBody2),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//PATCH: actualizar o editar informacion (solo se edita un atributo o elemento)
let post = 10;
let modificacion = {
  title: "Lorito comelon",
};

fetch(`${url}/posts/${post}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json ; charset=UTF-8",
  },
  body: JSON.stringify(modificacion),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
//DELETE: eliminar informacion
posteo = 5;
fetch(`${url}/posts/${posteo}`, {
  method: "DELETE",
});
