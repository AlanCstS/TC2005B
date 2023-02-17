let boton = document.getElementById("respuestas");
let textoVisible = true;
boton.onclick = () => {
    let texto = `
    <ul class="preguntas">
        <li><b>¿Cuál es la diferencia entre Internet y la World Wide Web?</b></li>
        Internet es la red subyacente que conecta a todas las computadoras, mientras que la Web es uno de los servicios que se ejecutan en la parte superior de Internet
        <li><b>¿Cuáles son las partes de un URL?</b></li> 
        Un URL (Uniform Resource Locator) es una cadena de caracteres que se utiliza para identificar de manera única una dirección web en Internet. Un URL típicamente se compone de las siguientes partes:
        <ul><li>Protocolo: Especifica el protocolo de comunicación utilizado para acceder al recurso, como HTTP o HTTPS.</li></ul>
        <ul><li>Nombre de dominio: Es el nombre del sitio web al que se accede, como www.ejemplo.com.</li></ul>
        <ul><li>Ruta: Es la ubicación específica del recurso dentro del sitio web.</li></ul>
        <ul><li>Parámetros de consulta: Son datos opcionales que se envían al servidor para solicitar información adicional.</li></ul>
        <ul><li>Fragmento: Es una referencia a una sección específica dentro del recurso, como una ancla HTML.</li></ul>
        <li><b>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</b></li>
        El propósito de los métodos HTTP es definir cómo se deben comunicar los clientes y servidores web. Por ejemplo, el método GET se utiliza para solicitar recursos del servidor, mientras que el método POST se utiliza para enviar datos al servidor para su procesamiento.
        <li><b>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</b></li>
        Se debe utilizar el método POST para enviar un formulario HTML, ya que permite enviar datos al servidor para su procesamiento sin mostrarlos en la URL del navegador. Esto es importante para proteger la privacidad y seguridad de los datos.
        <li><b>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</li></b>
        Se utiliza el método GET cuando se accede a una página a través de un URL. El navegador solicita el recurso especificado en el URL del servidor y recibe una respuesta que contiene el recurso.
        <li><b>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</li></b>
        Un código de respuesta HTTP 200 indica que la solicitud del cliente fue exitosa y que el servidor ha devuelto los datos solicitados correctamente. No hubo ningún error.
        <li><b>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</li></b>
        Sí, es responsabilidad del desarrollador corregir un sitio web si un usuario reporta un error 404. Esto se debe a que el error 404 indica que la página solicitada no existe, lo que puede afectar la experiencia del usuario y la funcionalidad del sitio.
        <li><b>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</li></b>
        Sí, es responsabilidad del desarrollador corregir un sitio web si un usuario reporta un error 500. Este error indica que se produjo un error interno en el servidor, lo que puede deberse a un problema en el código del sitio. El desarrollador debe solucionar el problema para que el sitio vuelva a funcionar correctamente.
        <li><b>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</li></b>
        Un atributo HTML5 que está deprecado o desaprobado significa que ya no se recomienda su uso y que puede ser eliminado en futuras versiones de HTML. Algunos elementos de HTML 4 que están desaprobados en HTML5 son el elemento "center", el atributo "align" y el elemento "font".
        <li><b>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</li></b>
        Algunas de las principales diferencias entre HTML 4 y HTML5 son la adición de nuevos elementos semánticos en HTML5, como "article" y "section", el soporte integrado para audio y video, y la capacidad de almacenar datos en el navegador del usuario mediante el uso del API de almacenamiento web.
        <li><b>¿Qué componentes de estructura y estilo tiene una tabla?</li></b>
        Una tabla en HTML consiste en filas y columnas, que se definen mediante los elementos "tr" y "td", respectivamente. Además de los elementos "tr" y "td", una tabla en HTML también puede contener otros elementos de estructura como "thead", "tbody" y "tfoot" para organizar el contenido de la tabla. Para dar estilo a la tabla, se pueden utilizar atributos como "border", "cellpadding" y "cellspacing", así como estilos CSS para personalizar la apariencia de la tabla, sus celdas y sus bordes. También se pueden utilizar clases y selectores CSS para aplicar estilos específicos a diferentes partes de la tabla.
        <li><b>¿Cuáles son los principales controles de una forma HTML5?</li></b>
        Algunos de los principales controles de un formulario HTML5 incluyen:
        <ul><li>Texto: para ingresar datos de texto</li></ul>
        <ul><li>Contraseña: para ingresar datos de contraseña (los caracteres se muestran como puntos)</li></ul>
        <ul><li>Selección: para permitir la selección de una opción de una lista desplegable o una lista de opciones</li></ul>
        <ul><li>Checkbox: para permitir la selección de una o varias opciones entre varias opciones</li></ul>
        <ul><li>Radio: para permitir la selección de una única opción entre varias opciones</li></ul>
        <ul><li>Botón: para enviar el formulario o realizar alguna acción específica</li></ul>
        <ul><li>Textarea: para ingresar texto en un área de texto de varias líneas</li></ul>
        <ul><li>Rango: para permitir la selección de un valor en un rango específico</li></ul>
        <ul><li>Fecha: para permitir la selección de una fecha en un calendario</li></ul>
        <ul><li>Archivo: para permitir la selección de un archivo para ser cargado al servidor</li></ul>
        Estos controles pueden ser personalizados y estilizados con HTML, CSS y JavaScript para adaptarse a las necesidades específicas de un formulario en particular.
        <li><b>¿Qué tanto soporte HTML5 tiene el navegador que utilizas?</li></b>
        Opera obtuvo 474 de 555 puntos
        <li><b>¿Cuál es el ciclo de vida de los sistemas de información?</li></b>
        El ciclo de vida de los sistemas de información se refiere a las etapas por las que un sistema de información pasa desde su concepción hasta su obsolescencia. Las etapas típicas son: planificación, análisis, diseño, implementación y mantenimiento.
        <li><b>¿Cuál es el ciclo de desarrollo de sistemas de información?</li></b>
        El ciclo de desarrollo de sistemas de información se refiere a la metodología utilizada para crear un sistema de información, y las etapas que se siguen durante el proceso. Las metodologías comunes incluyen el modelo en cascada, el modelo en espiral y la metodología ágil. Las etapas típicas incluyen: requerimientos, diseño, implementación, pruebas y mantenimiento.
        <li><b>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</li></b>
        Como ingeniero de software, la recomendación es utilizar !important con precaución. Aunque puede ser una herramienta útil para sobrescribir estilos específicos, su uso excesivo puede hacer que el código sea más difícil de mantener y depurar. Además, si se utiliza demasiado, puede anular los estilos de los archivos CSS externos, lo que hace que sea aún más difícil de entender y modificar el estilo de la página.
        <li><b>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</li></b>
        Es importante escoger la imagen de fondo cuidadosamente porque puede afectar el rendimiento de la página. Una imagen de fondo grande puede ralentizar el tiempo de carga de la página y afectar negativamente la experiencia del usuario. Además, se debe tener en cuenta el tamaño de la imagen en relación con el tamaño de la pantalla del dispositivo en el que se está visualizando la página. Una imagen muy pequeña o de baja resolución puede verse pixelada o borrosa en pantallas de alta resolución.
        <li><b>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</li></b>
        Al elegir las unidades de una propiedad de estilo, se debe considerar el contexto en el que se va a utilizar. En general, recomiendo usar unidades relativas (como % o em) en lugar de unidades absolutas (como px o pt) para permitir una mayor flexibilidad y adaptabilidad a diferentes tamaños de pantalla y dispositivos. Las unidades absolutas son más adecuadas para propiedades que no necesitan adaptarse a diferentes tamaños de pantalla, como el tamaño de fuente de un encabezado.
        <li><b>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</b></li>
        El uso de una versión minimizada del CSS mejora el rendimiento del sitio porque reduce el tamaño del archivo CSS y, por lo tanto, disminuye el tiempo de carga de la página. Al eliminar espacios en blanco, comentarios y otros caracteres innecesarios, el archivo CSS es más liviano y se puede descargar más rápido en el navegador del usuario, lo que a su vez mejora la experiencia del usuario en el sitio.  
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
