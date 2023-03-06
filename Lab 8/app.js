console.log("hola mundo desde node");
console.info("Este script se está ejecutando desde una computadora y no desde el navegador");
console.warn("document, alert, confirm y prompt, no existen en el entorno de ejecución de node");
console.error("Así se ve un error");

// //fs es el módulo para trabajar con el sistema de archivos
// const filesystem = require('fs');
// filesystem.writeFileSync('hola.txt', 'Hola desde node');
// console.log("Terminamos de escribir el archivo");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => { console.log(item);}, item);
} 

console.log("Este log está después de imprimir el arreglo");

setTimeout(()=> {console.log("Ya te hackié");}, 12000);


const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>HOLA MUNDO<h1>");
    response.end();
});

server.listen(3000);

function promedio(arreglo){
    let prom = 0;
    for(let i = 0; i< arreglo.length; i++){
        prom += arreglo[i];
    }
    return prom/arreglo.length
}

let res = promedio(arreglo);
console.log("El promedio es: " + res);

function escribirString(str){
    const filesystem = require('fs');
    filesystem.writeFileSync('string.txt', `${str}`);
}

escribirString("Esto es parte de una función del laboratorio 8");
console.log("Archivo de texto con string 'Esto es parte de una función del laboratorio 8' creado exitosamente!");

