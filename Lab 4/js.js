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

// Alancance de variables. SIEMPRE USA LET (a menos que sepas que haces y tengas razones para usar VAR)
// Con let el alcance es en función 
// Con var el alcance es global
for(let i = 1; i<=10; i++){
    console.log(i);
}
console.log(i);

// alert, prompt, confirm
alert("hola!");

let nombre = prompt("¿Cómo te llamas?");

console.log("Hola " + nombre);

let is_hungry = confirm("¿Tienes habmre?");

console.log(is_hungry);



// funciones tradicionales
function numero_tacos () {
    return 5;
}

console.log(numero_tacos());


// funciones modernas
let cantidad_tacos = () => {return 5;}

console.log(cantidad_tacos());