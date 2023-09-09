// ¡Hola! Ahora aprenderemos sobre algunas funciones en JavaScript.Una función es como un mini-programita.

// Sintaxis básica de una función en JavaScript

// Declaración de una función llamada "saludar"
function saludar(nombre) {
  // El parámetro "nombre" es una variable local que representa el nombre que pasaremos cuando llamemos a la función.

  // Cuerpo de la función
  // Aquí colocamos el código que realiza la tarea de la función.
  let mensaje = "¡Hola, " + nombre + "!"; // Crear un mensaje de saludo

  // Devolvemos el mensaje como resultado de la función
  return mensaje;
}

// Llamada a la función "saludar" y almacenar el resultado en una variable
let mensajeSaludo = saludar("Juan"); // Pasamos "Juan" como argumento

// Imprimir el resultado en la consola
console.log(mensajeSaludo); // Imprime "¡Hola, Juan!" en la consola

// Más ejemplos de llamadas a la función
let mensajeAmigo = saludar("Pedro"); // Pasamos "Pedro" como argumento
console.log(mensajeAmigo); // Imprime "¡Hola, Pedro!" en la consola

let mensajeFamilia = saludar("María"); // Pasamos "María" como argumento
console.log(mensajeFamilia); // Imprime "¡Hola, María!" en la consola

//-----------------------------------

//Función lista de la compra
function compra(producto1 , producto2) {
return "compre " + producto1 + " y " + producto2;
}
listadeLaCompra = compra("leche" , "patatas");
console.log (listadeLaCompra) ;

compraDeMañana = compra("azucar" , "tomates")
console.log (compraDeMañana) ; 

//----------------------------------------------------

//Función cumpleaños
  function edad(parametro1 , parametro2) {
    let cumpleaños = parametro1 - parametro2
    return cumpleaños ;
  }

  let edadJuan = edad(2023,1984);
  console.log("Juan hoy cumple " + edadJuan + " años" ) ;

//----------------------------------------------------
