// Se puede usar la palabra reservada VAR para declarar variables
// Pero usaremos LET el cual hace lo mismo pero con mayor alcance en las variabkes

var comida = "chilaquiles";

let cena = "tacos";

const precio = 70;

console.log("hola");
console.info("Valor de la comida: " + comida);
console.warn("El precio no se puede modificar");
console.error("Te dije que el precio no se puede modificar");

// En js el '=' representa asignación (como en todos los demás lenguajes) 
// El '==' es una comparación de valor
// El '===' es una comparación de valor y tipo
console.assert(1 === 1);
console.assert(1 === "1");
console.assert(1 == "1");
console.assert(1 == true);
console.assert(1 === true);
