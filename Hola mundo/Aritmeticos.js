// ¡Hola! Ahora aprenderemos sobre los operadores aritméticos en JavaScript.
// Creamos unas variables.
let a=6 , b=2;

// Suma
let suma = a + b; // La suma es como contar caramelos. 
console.log("La suma es: " + suma); // Imprime "6 + 2 = 8"

// Resta
let resta = a - b; // La resta es como quitar manzanas de una caja. 
console.log("La resta es: " + resta); // Imprime "6 - 2 = 4"

// Multiplicación
let multiplicacion = a * b; // La multiplicación es como contar grupos de galletas. 
console.log("La multiplicación es " + multiplicacion); // Imprime "6 * 2 = 12"

// División
let division = a / b; // La división es como compartir chocolates. 
console.log("La división " + division); // Imprime "6 / 2 = 3"

// Módulo (Resto) ----> Util para saber si un  numero es par o impar
let resto = a % b; // El módulo es como saber cuántas gomitas quedan. 
console.log("El resto es " + resto); // Imprime "6 % 2 = 0"

// Potencia
let resultado = a ** b; // Esto significa a elevado a la potencia de b, que es igual a 36.
console.log(resultado); // Imprime 8

// Incremento
let contador = 0; // Contador de cohetes que despegan.
contador++; // Un cohete despega.
console.log("Cohetes despegados: " + contador); // Imprime "Cohetes despegados: 1"

// Decremento
contador--; // Un cohete aterriza.
console.log("Cohetes despegados: " + contador); // Imprime "Cohetes despegados: 0"

//...................................................................................

//Operadores y su orden de preferencia en JavaScript.
// Multiplicación y división (tienen la misma prioridad)
let resultado1 = 5 * 3 / 2; // Primero se multiplica (5 * 3), luego se divide (/ 2). El resultado es 7.5.
console.log("5 * 3 / 2 = " + resultado1); // Imprime "5 * 3 / 2 = 7.5"

// Suma y resta (tienen la misma prioridad)
let resultado2 = 10 + 4 - 2; // Primero se suma (10 + 4), luego se resta (- 2). El resultado es 12.
console.log("10 + 4 - 2 = " + resultado2); // Imprime "10 + 4 - 2 = 12"

// Paréntesis (tienen la mayor prioridad)
let resultado3 = (8 + 2) * 4; // Primero se realiza la suma (8 + 2) dentro de los paréntesis, luego se multiplica (* 4). El resultado es 40.
console.log("(8 + 2) * 4 = " + resultado3); // Imprime "(8 + 2) * 4 = 40"

// Operadores mezclados
let resultado4 = 2 + 3 * 4; // Multiplicación (*) tiene prioridad sobre suma (+). Primero se multiplica (3 * 4), luego se suma (+ 2). El resultado es 14.
console.log("2 + 3 * 4 = " + resultado4); // Imprime "2 + 3 * 4 = 14"

// Usando paréntesis para cambiar el orden
let resultado5 = (2 + 3) * 4; // Los paréntesis tienen la mayor prioridad, entonces primero se realiza la suma (2 + 3) dentro de los paréntesis, luego se multiplica (* 4). El resultado es 20.
console.log("(2 + 3) * 4 = " + resultado5); // Imprime "(2 + 3) * 4 = 20"

//...................................................................................

// Operadores de asignación compuesta en JavaScript.
// Operador de suma y asignación (+=)
let numero = 5;
numero += 3; // Esto es igual a hacer: numero = numero + 3;
console.log("Número después de +=: " + numero); // Imprime "Número después de +=: 8"

// Operador de resta y asignación (-=)
let total = 20;
total -= 7; // Esto es igual a hacer: total = total - 7;
console.log("Total después de -=: " + total); // Imprime "Total después de -=: 13"

// Operador de multiplicación y asignación (*=)
let producto = 6;
producto *= 4; // Esto es igual a hacer: producto = producto * 4;
console.log("Producto después de *=: " + producto); // Imprime "Producto después de *=: 24"

// Operador de división y asignación (/=)
let dividendo = 50;
dividendo /= 10; // Esto es igual a hacer: dividendo = dividendo / 10;
console.log("Dividendo después de /=: " + dividendo); // Imprime "Dividendo después de /=: 5"

// Operador de módulo y asignación (%=)
let numeroRestante = 15;
numeroRestante %= 7; // Esto es igual a hacer: numeroRestante = numeroRestante % 7;
console.log("Número restante después de %=: " + numeroRestante); // Imprime "Número restante después de %=: 1"

//...................................................................................

// Operadores unarios en JavaScript.
// Creamos una variable.
let contadorNuevo = 5;

// Operador de incremento (++): aumenta el valor en 1.
contadorNuevo++; // Esto es igual a hacer: contador = contador + 1;
console.log("Después del incremento: " + contadorNuevo); // Imprime "Después del incremento: 6"

// Operador de decremento (--): disminuye el valor en 1.
contadorNuevo--; // Esto es igual a hacer: contador = contador - 1;
console.log("Después del decremento: " + contadorNuevo); // Imprime "Después del decremento: 5"

// Operador unario negativo (-): cambia el signo del valor.
let numeroNuevo = 10;
let negativo = -numeroNuevo; // Cambia el signo de 10 a -10.
console.log("Número negativo: " + negativo); // Imprime "Número negativo: -10"

// Operador unario de negación lógica (!): invierte un valor booleano.
let verdadero = true;
let falso = !verdadero; // Invierte true a false.
console.log("Valor invertido: " + falso); // Imprime "Valor invertido: false"

