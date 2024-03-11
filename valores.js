//valores primitivos
typeof 40;

("String");

true;
false;

null;
undefined[
  //valores no primitivos o objeto
  (1, 2, 3)
];
{
  nombre: "diego";
}

function fibonacci() {
  let n = 0;
  let a = 0;
  let b = 1;
  let c = 0;
  while (n < 10) {
    c = a + b;
    a = b;
    b = c;
    n++;
  }
  return c;
}
