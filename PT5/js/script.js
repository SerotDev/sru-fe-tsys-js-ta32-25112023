// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Declaramos variables
var numero1 = 5;
var numero2 = 8;

// Si numero1 es no es mayor que numero 2
if (numero1 <= numero2) {
  console.log("numero1 (" + numero1 + ") no es mayor que numero2 (" + numero2 + ")");
}

// Si numero2 es positivo
if (numero2 > 0) {
  console.log("numero2 (" + numero2 + ") es positivo");
}

// Si numero1 es negativo o distinto a zero (un numero negativo ya es diferente a 0)
if (numero1 != 0) {
  console.log("numero1 (" + numero1 + ") es negativo o diferente de cero");
}

// Si al incrementar en uno el numero1 no es igual o mayor que numero2
if ((numero1 + 1) < numero2) {
  console.log("incrementar en 1 unidad el valor de numero1 (" + numero1 + "+1) no lo hace mayor o igual que numero2 (" + numero2 + ")");
}
