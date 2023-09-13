let largo = "Hola Mundo";
console.log(typeof largo); //tipo 
console.log(largo.length); //longitud del string
console.log(largo.charAt(1)); //Devuelve el caracter del indice(empieza por 0)
console.log(largo[0]); //posicion de la letra

//-------------------------
//        METODOS
//-------------------------


let objeto = new String("NUEVO");
console.log(typeof objeto);

console.log(objeto.toLowerCase()); //texto en minuscula
console.log(largo.toUpperCase()); //texto en mayuscula
console.log(objeto);

//--Trim----------
//----------------
// Elimina los espacios en blanco al inicio y final de la cadena.
const cadenaConEspacios = "   ¡Hola!   ";
const cadenaSinEspacios = cadenaConEspacios.trim(); // "¡Hola!"
console.log("Cadena sin espacios en blanco: " + cadenaSinEspacios);

//---Dos metodos juntos------
// Tantos metodos como se quieran.
console.log(cadenaSinEspacios.toUpperCase().split());

//--IndexOf-------------
//----------------------
//indexOf busca el elemento especificado y devuelve la posición de la primera coincidencia encontrada en el indice
let nombre = "Hola-Mundo";
console.log(nombre.indexOf("Mundo"));
console.log("Si no exite dará la posicion -1: " + nombre.indexOf("adios"));
//-----------------

// Definimos una cadena de texto.
var frase = "Hola, ¿cómo estás?";

// Usamos indexOf para buscar la posición de la palabra "cómo" en la cadena.
var posicion = frase.indexOf("cómo");

// Comprobamos si la palabra "cómo" fue encontrada y mostramos su posición.
if (posicion !== -1) {
    console.log('La palabra "cómo" se encuentra en la posición ' + posicion + ' de la cadena.');
} else {
    console.log('La palabra "cómo" no se encuentra en la cadena.');
}

//--Slice----------
//----------------
// Recorta un pedazo del string

let ingreso = "560€";
console.log(ingreso.slice(0,3));
//para cambiar un string por un numero se puede hacer de dos maneras: Number o +
console.log(typeof ingreso);
let euros = +((ingreso.slice(0,3)));
let euros2 = Number((ingreso.slice(0,3)));
console.log(typeof euros);
console.log(typeof euros2);

//--Replace----------
//----------------
// Remplaza parte del string

let apellido = "Navarro González";
console.log(console.log(apellido.replace("Navarro","Ortega")));
console.log(apellido); //no se cambia, habría que guardarlo en una variable.
let apellidoNuevo = apellido.replace("Navarro","Ortega");
console.log(apellidoNuevo);








































