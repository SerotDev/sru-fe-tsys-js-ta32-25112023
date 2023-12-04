// Función para determinar si una variable es un palídromo
let esPalindromo = (texto) => {
  // Quita los espacios de la cadena y la convierte a minusculas
  texto = texto.replace(/ /g, "").toLowerCase();
  let auxEsPalindromo = "Es un palíndromo";
  //recorre la palabra y por cada posición de letra la compara con su posicion opuesta
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) !== texto.charAt(texto.length - (i + 1))) {
      auxEsPalindromo = "No es un palíndromo";
    }
    //si ha llegado a la mitad de la palabra para el bucle (si es impar se para antes de comprobar la letra del medio)
    if (i >= (texto.length - (i + 3))) {
      i = texto.length;
    }
  }
  return auxEsPalindromo;
};

// Pide texto
let texto = prompt(
  "Escribe una cadena de texto para saber si es un palíndromo o no",
  "La ruta nos aporto otro paso natural"
);
// Muestra si es palíndromo o no
alert(texto + "\n" + esPalindromo(texto));
