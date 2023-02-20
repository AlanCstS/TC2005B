let num = prompt("1. Dame un número");
let ej1 = document.getElementById("ej1");
for(let i = 1; i <= num; i++) {
  const cuadrado = Math.pow(i,2);
  const cubo = Math.pow(i,3);
  ej1.innerHTML += `${i} ${cuadrado} ${cubo} <br>`;
}

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
