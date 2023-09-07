// -------------------EXAMEN DE JAVASCRIPT---------------------------------------------------

//------------------------ARITMETICA--------------------------------------

// 1) Calcula el resultado de la siguiente expresión:
// Pregunta: 1.5 + 1.5 * 2 =
let resultado1 = 1.5 + 1.5 * 2; // Respuesta: 4.5
console.log(resultado1);

// 2) Calcula el resultado de la siguiente expresión:
// Pregunta: (10 % 6) ** 2 =
let resultado2 = (10 % 6) ** 2; // Respuesta: 16
console.log(resultado2);

// 3) Calcula el resultado de la siguiente expresión:
// Pregunta: 200 + 0 / 0 =
let resultado3 = 200 + 0 / 0; // expresion invalida-- NaN
console.log(resultado3);

// -------------------DECLARACIÓN DE VARIABLES------------------------------------

let a = 3;
let b = 5;
let c = "resultado";
const YEAR = "2021";

// 4) ¿Qué muestra esta línea en la consola?
    // console.log("resultado");
    console.log("resultado");
// Respuesta: resultado

// 5) ¿Qué valor guarda la variable c y cómo se puede verificar?
    c = a + b;
    console.log(c);
// Respuesta: 8

// 6) ¿Qué valor se imprime en la consola?
// Pregunta: console.log(++c);
    console.log(++c);
// Respuesta: 9

// 7) ¿Qué valor guarda la variable c ahora?
// Pregunta: c += a;
    c += a;
    console.log(c);
// Respuesta: 12

// 8) ¿Qué problema tiene esta línea de código?
// Pregunta: resultado = b + "10";
    let resultado = b + "10";
    console.log(resultado);
// Respuesta: 510

// 9) ¿Qué valor se imprime en la consola?
// Pregunta: console.log("a+"JS");
    console.log (a + "JS");
// Respuesta: 3JS

// 10) ¿Cuántas variables hemos utilizado hasta ahora y cuáles son sus nombres?
// Respuesta: 4 variables: a , b , c , YEAR

// 11) ¿Qué valor se imprime en la consola?
// Pregunta: console.log("El año " + (++YEAR) + " seguro estaremos mejor.");
//const YEAR = "2021";
let covid19 = "El año de la pandemia ";
let resultado4 = covid19 + YEAR;
console.log(resultado4);
// Respuesta: "El año de la pandemia 2021."

// 12) ¿Qué valor se imprime en la consola?
// Pregunta: console.log("El año " + (++YEAR) + " seguro estaremos mejor.";
console.log("El año " + (++YEAR) + " seguro estaremos mejor.");
// Respuesta: No se puede variar una costante

//---------------- BUENAS PRÁCTICAS------------------------------

// 13) ¿Var o let? ¿Cuál es mejor y por qué?
// Respuesta: Mejor let, porque var puede sobreescribir la variable en todo el ámbito, mientras que let limita el alcance de la variable.

// 14) ¿totalAcumulado o TotalAcumulado?
// Respuesta:  totalAcumulado

// 15) ¿const meses = 12; o const MESES = 12;?
// Respuesta:  const MESES = 12;

// 16) ¿Const NUMEROPI o NUMERO_PI?
// Respuesta:  NUMERO_PI

// 17) ¿let nume = 5 o let num=5;?
// Respuesta:  let num = 5;
