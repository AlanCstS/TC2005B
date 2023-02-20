// Ejercicio 1:
let num = prompt("1. Dame un número");
let ej1 = document.getElementById("ej1");
for(let i = 1; i <= num; i++) {
  const cuadrado = Math.pow(i,2);
  const cubo = Math.pow(i,3);
  ej1.innerHTML += `${i} ${cuadrado} ${cubo} <br>`;
}

// Ejercicio 2:
let num1 =  Math.floor(Math.random() * 10);
let num2 =  Math.floor(Math.random() * 10);
const resultado = num1 + num2;
const tiempoInicio = Date.now();
let respuesta = prompt(`2. Dame el resultado de la suma de ${num1} y ${num2}`);
const tiempoFinal = Date.now();
const tiempo = tiempoFinal - tiempoInicio;
console.assert(resultado == respuesta);
let ej2 = document.getElementById("ej2");
if(resultado == respuesta){
  ej2.innerHTML = `Respuesta correcta. Tardaste ${tiempo / 1000} segundos.`;
  alert("Correcto!")
}else{
  ej2.innerHTML = `Respuesta incorrecta. Tardaste ${tiempo / 1000} segundos.`
  alert("Incorrecto!")
}

// Ejercicio 3:


let boton = document.getElementById("respuestas");
let textoVisible = true;
boton.onclick = () => {
    let texto = `
    <ul class="preguntas">
        <li><b>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</b></li>
        Resp
        <li><b>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</b></li>
        Resp
        <li><b>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</b></li>
        Resp
        <li><b>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</b></li>
        Resp
        <li><b>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</b></li>
        Resp
    </ul>          
  `;

  let elemento = document.getElementById("preguntas-respuestas");

  if (textoVisible) {
    elemento.innerHTML = texto;
    boton.innerHTML = "Ocultar Respuestas";
  } else {
    elemento.innerHTML = "";
    boton.innerHTML = "Enseñar Respuestas";
  }
  textoVisible = !textoVisible; // Cambia el estado de la variable
}
