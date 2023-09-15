/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * 
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 */



// Esta función imprime los resultados de encontrar caracteres no comunes entre dos cadenas.
function printNonCommon(str1, str2) {
    // Imprime los caracteres no comunes de str1 en out1.
    console.log("out1: " + findNonCommon(str1, str2));
    // Imprime los caracteres no comunes de str2 en out2.
    console.log("out2: " + findNonCommon(str2, str1));
}

// Esta función encuentra y devuelve los caracteres no comunes en str1 en comparación con str2.
function findNonCommon(str1, str2) {
    // Inicializa una cadena vacía para almacenar los caracteres no comunes.
    let out = "";

    // Convierte str1 a minúsculas y luego itera a través de cada carácter en ella.
    str1.toLowerCase().split('').forEach(char => {
        // Verifica si el carácter actual de str1 no está en str2 (en minúsculas).
        if (!str2.toLowerCase().includes(char)) {
            // Si no está en str2, agrega el carácter a la cadena 'out'.
            out += char;
        }
    });

    // Devuelve la cadena que contiene los caracteres no comunes.
    return out;
}

// Esta función utiliza el método 'filter' para encontrar y devolver los caracteres no comunes en str1 en comparación con str2.
function printNonCommonWithFilter(str1, str2) {
    // Imprime los caracteres no comunes de str1 en out1 usando el método 'filter'.
    console.log("out1: " + str1.toLowerCase().split('').filter(char => !str2.toLowerCase().includes(char)).join(''));
    // Imprime los caracteres no comunes de str2 en out2 usando el método 'filter'.
    console.log("out2: " + str2.toLowerCase().split('').filter(char => !str1.toLowerCase().includes(char)).join(''));
}

// Ejemplo de uso de las funciones.
printNonCommon("brais", "moure");
printNonCommon("Me gusta Java", "Me gusta Kotlin");
printNonCommonWithFilter(
    "Usa el canal de nuestro discord (https://mouredev.com/discord) \"🔁reto-semanal\" para preguntas, dudas o prestar ayuda a la comunidad",
    "Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada."
);
