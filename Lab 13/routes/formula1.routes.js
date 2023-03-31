const express = require('express');

const router = express.Router();

const pilotos = [
    { 
        nombre: "Max Verstappen", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png", 
        equipo: "@Red Bull Racing",
        pais: "Paises Bajos",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Sergio Perez", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png", 
        equipo: "@Red Bull Racing",
        pais: "Mexico",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Fernando Alonso", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png", 
        equipo: "@Aston Martin",
        pais: "España",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Carlos Sainz", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png", 
        equipo: "@Ferrari",
        pais: "España",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Lewis Hamilton", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png", 
        equipo: "@Mercedes Benz",
        pais: "Reino Unido",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "George Rusell", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png", 
        equipo: "@Mercedes Benz",
        pais: "Reino Unido",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Lance Stroll", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png", 
        equipo: "@Aston Martin",
        pais: "Reino Unido",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Charles Leclerc", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png", 
        equipo: "@Ferrari",
        pais: "Monaco",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: "Valtteri Bottas", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png", 
        equipo: "@Alfa Romeo",
        pais: "Finlandia",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Esteban Ocon", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png", 
        equipo: "@Alpine",
        pais: "Francia",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: "Pierre Gasly", 
        imagen: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png", 
        equipo: "@Alpine",
        pais: "Francia",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }
];

router.get('/', (request, response, next) => {
    response.render('lista', {pilotos: pilotos});
});

module.exports = router;