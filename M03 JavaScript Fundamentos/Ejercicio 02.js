/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var Suma = x + y;
   return Suma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   const Resta = x - y;
   return Resta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   const divide = x / y;
   return divide;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   const multiplica = x * y;
   return multiplica;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   const obtenerResto = x % y;
   return obtenerResto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
