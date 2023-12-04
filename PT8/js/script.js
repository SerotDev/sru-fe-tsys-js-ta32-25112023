// Funcion para saber si un numero es par o impar
let parOImpar = (numero) => {
  return numero % 2 == 0 ? "par" : "impar";
};

// Funcion para chequear si es numero es natural
let isNatural = (num) => {
  let numParsed = parseInt(num, 10);
  return numParsed >= 0 && numParsed.toString() === num;
};

// Introduccion del numero por el usuario
let num = prompt("Inserta un numero para saber si es par o impar", "5");

// Mientras el dato no sea un numero se sigue preguntando
while (!isNatural(num)) {
  num = prompt(
    "Dato no numérico natural, inserta un numero para saber si es par o impar","5");
}

// Mostramos resultado
alert( num + " es un numero " + parOImpar(num));
