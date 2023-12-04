// Funcion para chequear si una cadena esta formada solo por mayusculas, solo por minusculas o ambas
let tipoDeTexto = (texto) => {
  let auxTipo = "ni Mayusculas ni Minusculas.";
  // Si todo el texto son solo mayusculas
  if (texto === texto.toUpperCase() && texto !== texto.toLowerCase()) {
    auxTipo = "solo Mayusculas."
  // Si todo el texto son solo minusculas
  } else if(texto === texto.toLowerCase() && texto !== texto.toUpperCase()){
    auxTipo = "solo Minusculas."
  // Si todo el texto no es solo mayusculas o solo minusculas
  } else{
    // Declaracion de valiables auxiliares
    let haveMayus = false;
    let haveMinus = false;
    //Busca si el texto contiene alguna mayuscula y minuscula
    for (let i = 0; i < texto.length; i++) {
      let letra = texto.charAt(i);
      if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()) {
        haveMayus = true;
      } else if(letra === letra.toLowerCase() && letra !== letra.toUpperCase()) {
        haveMinus = true;
      }
    }
    // Si el texto contiene alguna mayuscula y minuscula
    if (haveMayus && haveMinus) {
      auxTipo = "Mayusculas y Minusculas.";
    }
  }
  return auxTipo;
}

// Pide texto
let texto = prompt("Escribe una cadena de texto", "CADENA DE TEXTO");
// Muestra tipo de texto
alert("Cadena formada por " + tipoDeTexto(texto));
