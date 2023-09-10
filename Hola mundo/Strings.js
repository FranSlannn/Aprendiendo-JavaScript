let largo = "Hola Mundo";
console.log(typeof largo); //tipo 
console.log(largo.length); //longitud del string
console.log(largo.charAt(1)); //Devuelve el caracter del indice(empieza por 0)
console.log(largo[0]); //posicion de la letra

//--------------------------------------
//METODOS

let objeto = new String("NUEVO");
console.log(typeof objeto);

console.log(objeto.toLowerCase()); //texto en minuscula
console.log(largo.toUpperCase()); //texto en mayuscula
console.log(objeto);

// Método trim: Elimina los espacios en blanco al inicio y final de la cadena.
const cadenaConEspacios = "   ¡Hola!   ";
const cadenaSinEspacios = cadenaConEspacios.trim(); // "¡Hola!"
console.log("Cadena sin espacios en blanco: " + cadenaSinEspacios);

//dos metodos juntos
console.log(cadenaSinEspacios.toUpperCase().split());
