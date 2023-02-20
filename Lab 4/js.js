// Ejercicio 1:
let num = prompt("1. Dame un número");
let ej1 = document.getElementById("ej1");
for(let i = 1; i <= num; i++) {
  const cuadrado = Math.pow(i,2);
  const cubo = Math.pow(i,3);
  ej1.innerHTML += `${i} ${cuadrado} ${cubo} <br>`;
}

// Ejercicio 2:
let num1 =  Math.floor(Math.random() * 20);
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
function contador (array) {
  let negativos = 0;
  let ceros = 0;
  let positivos = 0;
  let ej3 = document.getElementById("ej3");
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negativos++;
    } else if (array[i] === 0) {
      ceros++;
    } else {
      positivos++;
    }
  }
  ej3.innerHTML += `<br>${array}<br>
  Números negativos: ${negativos}<br>
  Número de 0's: ${ceros}<br>
  Número de positivos: ${positivos}<br>`;
  return [negativos, ceros, positivos];
}
// Fuente de los assert: chat.openai.com/chat
console.assert(JSON.stringify(contador([1, 2, 0, -1, -2])) === JSON.stringify([2, 1, 2]));
console.assert(JSON.stringify(contador([0, 0, 0])) === JSON.stringify([0, 3, 0]));

// Ejercicio 4:
function promedios(matriz) {
  const promedios = [];
  let ej4 = document.getElementById("ej4");
  for (let i = 0; i < matriz.length; i++) {
    let suma = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
    const promedio = suma / matriz[i].length;
    promedios.push(promedio);
  }
  ej4.innerHTML += `<br>${matriz}<br>
    Los promedios son: ${promedios}<br>`;
  return promedios;
}
// Prueba
console.assert(JSON.stringify(promedios([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) === JSON.stringify([2, 5, 8]));
console.assert(JSON.stringify(promedios([[2, 4, 6], [1, 3, 5]])) === JSON.stringify([4, 3]));

// Ejercicio 5:
function inverso(num) {
  const str_num = num.toString();
  let resultado = "";
  let ej5 = document.getElementById("ej5");
  for (let i = str_num.length - 1; i >= 0; i--) {
    resultado += str_num[i];
  }
  ej5.innerHTML += `<br>${num}<br>
    En inverso: ${resultado}<br>`;
  return (resultado);
}

// Prueba
console.assert(inverso(Math.floor(Math.random() * 100000)));
console.assert(inverso(Math.floor(Math.random() * 100000)))


// Botón
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
