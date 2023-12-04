// Funcion para calcular el factorial
let factorial = (num) => {
  if (num == 0) {
    num = 1; // Si es 0 su factorial es 1
  } else {
    // Calculamos factorial
    for (let i = num - 1; i > 0; i--) {
      console.log(num + "*" + i);
      num = num * i;
    }
  }
  // Retornamos resultado
  return num;
};

// Funcion para chequear si es numero es natural
let isNatural = (num) => {
    let numParsed = parseInt(num, 10);
    return numParsed >= 0 && numParsed.toString() === num;
}

// Introduccion del numero por el usuario
let num = prompt("Inserta un numero para calcular su factorial", "5");

// Mientras el dato no sea un numero se sigue preguntando
while (!isNatural(num)) {
  num = prompt("Dato no numérico natural, inserta un numero para calcular su factorial","5");
}

// Mostramos resultado
alert("el factorial de " + num + " es " + factorial(num));
