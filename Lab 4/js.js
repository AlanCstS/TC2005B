let boton = document.getElementById("respuestas");
boton.innerHTML = "Enseñar Respuestas";
let textoVisible = true;
boton.onclick = () => {
    let texto = `
    <ul>
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

  let elemento = document.getElementById("preguntas_lab4");

  if (textoVisible) {
    elemento.innerHTML = texto;
    boton.innerHTML = "Ocultar Respuestas";
  } else {
    elemento.innerHTML = "";
    boton.innerHTML = "Enseñar Respuestas";
  }
  textoVisible = !textoVisible; // Cambia el estado de la variable
}
