// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Declaramos array
let array = [true, 5, false, "hola", "adios", 2];

//recorremos array
for (let i = 0; i < array.length; i++) {
  
  // Validamos si la posición leida es de tipo strinig
  if (typeof array[i] === "string") {
    //buscamos en lo que queda de array el segundo texto y si lo encuentra comparamos cual es mayor y lo mostramos
    for (let j = i+1; j < array.length; j++) {
      if (typeof array[j] === "string") {
        if (array[i].length > array[j].length) {
          console.log("el texto mas largo es: " + array[i]);
        } else if (array[i].length == array[j].length) {
          console.log("los dos textos son iguales.");
        } else {
          console.log("el texto mas largo es: " + array[j]);
        }
        j = array.length; //dejamos de buscar
      }
    }
  }
  
  // Validamos si la posición leida es de tipo booleano
  if (typeof array[i] === "boolean") {
    // Si el booleano es false se almacena la posicion del array correspondiente
    if (array[i] == false) {
      // Resultado false
      console.log("El elemento " + i + " del array es un booleano con valor false.");
    } else {
      // Resultado true
      console.log("El elemento " + i + " del array es un booleano con valor true.");
    }
  }

  // Validamos si la posición leida es de tipo numerico
  if (typeof array[i] === "number") {
    //si hemos encontrado un numero buscamos el segundo número y si lo encuentra realizamos las operaciones 
    for (let j = i+1; j < array.length; j++) {
      if (typeof array[j] === "number") {
        console.log(array[i] + "+" + array[j] + "=" + (array[i] + array[j]));
        console.log(array[i] + "-" + array[j] + "=" + (array[i] - array[j]));
        console.log(array[i] + "*" + array[j] + "=" + array[i] * array[j]);
        console.log(array[i] + "/" + array[j] + "=" + array[i] / array[j]);
        console.log(array[i] + "%" + array[j] + "=" + (array[i] % array[j]));
        j = array.length; //dejamos de buscar
      }
    }
  }
}
