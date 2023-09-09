// ¡Hola! aquí aprenderemos sobre las funciones flecha.

// Ejemplo: Función Flecha Simple
const funcionFlecha = () => {
  console.log('Esto es desde una función flecha');
  return "Flecha dorada";
};

//----------------------------------------------------

// Ejemplo 1: Función para Elevar al Cuadrado
// Versión larga
const cuadradoLarga = function(x) {
  return x * x;
};

// Versión corta (función flecha)
const cuadradoCorta = (x) => x * x;

console.log("Ejemplo 1: Función para Elevar al Cuadrado");
console.log(cuadradoLarga(5)); // Imprime 25
console.log(cuadradoCorta(5)); // Imprime 25

//----------------------------------------------------

// Reducir el codigo cuando la funcion en el cuerpo solo usa una linea
const funcionsimple = () => console.log("Esto es posible porque solo contiene una línea de código.");
funcionsimple();

// Si la funcion solo va a recibir un unico parametro no es necesario usar los ()
const funcionEsperaParam = texto => console.log(texto);
funcionEsperaParam('Pasamos un argumento a la función flecha.');

// Funcion flecha con varios parametros, si nececitamoe hacer calculos complejos o usar mas de una linea se recomienda
// hacerlo entre () y usar return.
const funcionsumar = (dato1, dato2) => dato1 + dato2;
console.log(funcionsumar(18, 5));

// Reducir el codigo cuando la funcion tiene una sola linea y retorna un valor
const funcionRetornaValor = () => "Esto es posible porque solo contiene una línea de código, no es necesario usar return.";
console.log(funcionRetornaValor());

// Regresar un objeto
const regresarObjeto = () => ({ nombre: "Juan", apellido: "Perez" });
console.log(regresarObjeto());
