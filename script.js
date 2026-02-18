window.addEventListener ("DOMContentLoaded", function () {

    // Definimos un objeto literal

    let perro = {
        nombre: "Scott",
        color: "Cafe",
        edad: 5,
        macho: true,
        ladrar: function (){
            //return (perro.nombre + " puede ladrar");
            return (`${this.nombre} puede ladrar`);
        }
    };

    console.log(perro);

    // Notación punto 
    console.log (perro.color);
    console.log (perro.macho);

    // Notación corchete
    console.log (perro["nombre"]);
    console.log (perro["edad"]);

    console.log(perro.ladrar());

    // Añadiendo campos
    perro.tamaño = "Grande";

    console.log(perro);
    
    // Actualizar
    perro.tamaño = "Pequeño";

    // Borrar propiedades
    delete perro.edad;

    let perro2 = {
        nombre: "Scott",
        color: "Cafe",
        edad: 5,
        macho: true,
        ladrar: function (){
            //return (perro.nombre + " puede ladrar");
            return (`${this.nombre} puede ladrar`);
        }
    };

    // Bucle for para saber cada propiedad de nuestro objeto
    for (let clave in perro2) {
        console.log(clave + ": " + perro2[clave]);
        //Es como si estuviera haciendo esto
        //perro2["nombre"];
        //perro2["edad"];
    }

    // Objetos complejos (objetos dentro de otros objetos)
    let libro = {
        titulo: "Manual de JS",
        nSerie: "187C2",
        autores: ["Pedro Martinez", "Ana León"],
        editorial: {
            nombre: "Planeta",
            pais: "España"
        }
    }

    console.log (libro);
    console.log (libro.titulo);
    console.log (libro.autores[1]);

    // Estas 2 hacen los mismo 
    console.log(libro.editorial.pais);
    console.log(libro.editorial["pais"]);

    console.log("-------------- Recorrido ---------------");

    for (let clave in libro) {
        console.log (libro[clave]);
    }

    for (let clave in libro.editorial) {
        console.log (libro.editorial[clave]);
    }


    console.log ("------------ Bucle tradicional --------------")
    for (let i = 0; i < libro.autores.length; i++) {
        console.log (libro.autores[i]);   
    }

    console.log ("------------ Bucle of --------------")

    for (let autor of libro.autores) {
        console.log (autor);
    }





});