$(document).foundation()

let boton = document.getElementById("btn");
boton.onclick = () => {
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if(pass1 === pass2 && pass1){
        alert("Iniciando sesión")
    } else {
        alert("Las contraseñas no coinciden")
    }
}