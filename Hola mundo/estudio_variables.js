// ¡Hola! Hoy aprenderemos sobre las variables en JavaScript.

// Variable con 'var'
var personaje = "Mario"; // 'var' es como una caja de juguetes que puede usarse en cualquier lugar del juego.
console.log("Mi personaje es: " + personaje); // Imprime "Mi personaje es: Mario"

// Variable con 'let'
let monedas = 10; // 'let' es como un contador de monedas que solo funciona en una parte del juego.
console.log("Tengo " + monedas + " monedas."); // Imprime "Tengo 10 monedas."

// Variable con 'const'
const vidaMaxima = 3; // 'const' es como la cantidad máxima de vidas en el juego que nunca cambia.
console.log("Tienes " + vidaMaxima + " vidas máximas."); // Imprime "Tienes 3 vidas máximas."

// Variable de tipo cadena (string)
let nivel = "Fácil"; // 'nivel' es como el nivel del juego que muestra si es fácil o difícil.
console.log("Estás jugando en el nivel: " + nivel); // Imprime "Estás jugando en el nivel: Fácil"

// Variable numérica (number)
let puntos = 100; // 'puntos' es como la puntuación que va aumentando a medida que avanzas en el juego.
console.log("Tienes " + puntos + " puntos."); // Imprime "Tienes 100 puntos."

// Variable booleana (boolean)
let juegoTerminado = false; // 'juegoTerminado' muestra si el juego ha terminado o no.
console.log("¿El juego ha terminado? " + juegoTerminado); // Imprime "¿El juego ha terminado? false"

// Variable de tipo arreglo (array)
let inventario = ["espada", "escudo", "poción"]; // 'inventario' es como una mochila que guarda objetos del juego.
console.log("Tu inventario tiene: " + inventario); // Imprime "Tu inventario tiene: espada, escudo, poción"

// Variable de tipo objeto (object)
let jugador = {
  nombre: "Luigi",
  edad: 25,
}; // 'jugador' es como una tarjeta de identificación del personaje.
console.log("Nombre del jugador: " + jugador.nombre); // Imprime "Nombre del jugador: Luigi"
console.log("Edad del jugador: " + jugador.edad); // Imprime "Edad del jugador: 25"

// Variable de tipo función (function)
function saltar() {
  console.log("¡Saltaste!"); // 'saltar' es una acción que hace el personaje cuando presionas un botón.
}
saltar(); // Llama a la función 'saltar' y muestra "¡Saltaste!" en la consola.
