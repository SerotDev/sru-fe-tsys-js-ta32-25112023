// Declaracion del array de letras del DNI
var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

// Preguntamos hasta que el dni introducido sea válido
let dniValido = false;
while (!dniValido) {
  let dni = prompt("Inserta un DNI", "-2345678A");
  let num = dni.slice(0, -1); //recogemos numero
  let letra = dni.slice(-1); //recogemos ultimo caracter

  // Si el dni no tiene 9 carácteres no esta compuesto por un numero seguido de una letra se muestra mensaje
  if (dni.length != 9 || isNaN(num) || !isNaN(letra)) {
    alert("Formato incorrecto, introduce 8 numeros seguidos de una letra.");
  } else {
    // Si el numero es menor que 0 o mayor que 99999999 se muestra mensaje
    if (num < 0 || num > 99999999) {
      alert("Número incorrecto, introduce 8 numeros entre 00000000 y 99999999");
    } else {
      // Si la posición del array de letras equivalente al resto del nuero introducido entre 23 es igual a la letra introducida el dni es correcto
      if (letras[num % 23] == letra.toUpperCase()) {
        alert("DNI correcto.");
        dniValido = true;
      } else {
        alert("El dni es incorrecto.");
      }
    }
  }
}
