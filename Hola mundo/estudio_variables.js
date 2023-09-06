// ¡Hola! Hoy aprenderemos sobre las variables en JavaScript.

// Variable con 'var'
var personaje = "Mario"; // 'var' es como una caja de juguetes que puede usarse en cualquier lugar del juego.
var apellido_personaje = "Bros";
console.log("Mi personaje es: " + personaje + " " + apellido_personaje); // Imprime "Mi personaje es: Mario"

// Variable con 'let'
let monedas = 10; // 'let' es como un contador de monedas que solo funciona en una parte del juego.
console.log("Tengo " + monedas + " monedas."); // Imprime "Tengo 10 monedas."
monedas =20;
console.log("Ahora tengo: " + monedas) // Actualiza las monedas."

// Variable con 'const'
const vidaMaxima = 3; // 'const' es como la cantidad máxima de vidas en el juego que nunca cambia.
//vidaMaxima = 7; //nunca cambia con const.
console.log("Tienes " + vidaMaxima + " vidas máximas."); // Imprime "Tienes 3 vidas máximas."

// Variable de tipo cadena (string)
let nivel = "Fácil"; // 'nivel' es como el nivel del juego que muestra si es fácil o difícil.
nivel = "dificil"; //cambia
console.log("Estás jugando en el nivel: " + nivel); // Imprime "Estás jugando en el nivel: dificil"

// Variable numérica (number)
let puntos = 100; // 'puntos' es como la puntuación que va aumentando a medida que avanzas en el juego.
puntos = puntos + 70; //suma de puntos
console.log("Tienes " + puntos + " puntos."); // Imprime "Tienes 170 puntos."

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

function saludo() {
console.log("hola");
}
saludo(); // Dice hola.
