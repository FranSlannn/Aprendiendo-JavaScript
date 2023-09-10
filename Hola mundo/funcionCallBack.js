//Las funciones de callback son útiles para realizar tareas asincrónicas, procesar datos en un array y ejecutar funciones personalizadas en diferentes situaciones.

// Ejemplo 1: Función de Callback Básica
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

function usarCallback(callback) {
  const nombre = "Juan";
  callback(nombre);
}

console.log("Ejemplo 1: Función de Callback Básica");
usarCallback(saludar); // Llama a usarCallback y pasa la función saludar como callback.

//--------------------------------------

// Ejemplo 2: Es una función callback porque recibe como parámetro una función
function comprar(articulo1, articulo2, funcionCallback) {
  articulo1 = 65;
  articulo2 = 70;
  let gastado = articulo1 + articulo2;
  funcionCallback(gastado);
}

function imprimir(mensaje) {
  console.log("Compramos leche y pan - gastamos: " + mensaje);
}

comprar("leche", "pan", imprimir);

//--------------------------------------

// Ejemplo 3: Función de Callback para Sumar Números
function sumar(a, b) {
  return a + b;
}

function usarOperacion(callback) {
  const num1 = 5;
  const num2 = 3;
  const resultado = callback(num1, num2);
  console.log("El resultado es: " + resultado);
}

// Llamamos a usarOperacion y pasamos la función sumar como callback.
usarOperacion(sumar); // Deberías ver "El resultado es: 8" en la consola.