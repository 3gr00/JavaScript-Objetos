window.addEventListener ("DOMContentLoaded", function () {

    let listaActividades = document.getElementById("lista");
    let select = document.getElementById("filtroCategoria");
    let btnPlazas = document.getElementById ("btnPlazas");

    const actividades = [
        { titulo: "Introducción a JavaScript", nivel: "Básico", duracion: 6, plazas: 5, categoria: "Web" },
        { titulo: "HTML y CSS práctico", nivel: "Básico", duracion: 8, plazas: 0, categoria: "Web" },
        { titulo: "POO en JavaScript", nivel: "Medio", duracion: 6, plazas: 3, categoria: "Programación" },
        { titulo: "SQL desde cero", nivel: "Básico", duracion: 10, plazas: 2, categoria: "Bases de datos" },
        { titulo: "Consultas avanzadas SQL", nivel: "Avanzado", duracion: 8, plazas: 0, categoria: "Bases de datos" },
        { titulo: "APIs con fetch y JSON", nivel: "Medio", duracion: 6, plazas: 4, categoria: "Web" }
    ];

    // Crear las tarjetas de cada actividad
    function pintarTarjetas (actividades) {

        // Recorrer el array actividades
        let div, tituloAct, h2, nivelAct, parrafo, duracionAct, plazasAct, categoriaAct;
        for (let actividad of actividades) {
            // En actividad tendremos un objeto 
            // Creo un div
            div = document.createElement("div");
            div.setAttribute("class", "card");
            //titulo
            tituloAct = actividad.titulo;
            h2 = document.createElement("h2");
            h2.textContent = tituloAct;
            div.appendChild(h2);
            //nivel
            nivelAct = actividad.nivel;
            parrafo = document.createElement("p");
            //parrafo.textContent = "Nivel: " + nivelAct;
            parrafo.innerHTML = "<b>Nivel:</b> " + nivelAct;
            div.appendChild(parrafo);
            //duracion
            duracionAct = actividad.duracion;
            parrafo = document.createElement("p");
            parrafo.innerHTML = "<b>Duración:</b> " + duracionAct;
            div.appendChild(parrafo);
            //plazas
            plazasAct = actividad.plazas;
            parrafo = document.createElement("p");
            parrafo.innerHTML = "<b>Plazas:</b> " + plazasAct;
            div.appendChild(parrafo);
            //categoria
            categoriaAct = actividad.categoria;
            parrafo = document.createElement("p");
            parrafo.innerHTML = "<b>Categoria:</b> " + categoriaAct;
            div.appendChild(parrafo);


            // Añadir el div al div lista
            listaActividades.appendChild(div);
        }  
    }

    pintarTarjetas(actividades);

    function estaYa (cat) {
        let esta = false;
        for (let i = 0; i < listaCategorias.length; i++) {
            if (listaCategorias[i] == cat) {
                esta = true;
            }
            
        }
        return esta;
    }

    //Creacion de las opciones del select
    let listaCategorias = [];
    let cat;

    //Recorrer las actividades para sacar las categorias
    for (let actividad of actividades) {

        // De cada actividad me quedo  con la categoria
        cat = actividad.categoria;
        if (!estaYa(cat)) {
            listaCategorias.push (cat);
        }
    }

    //console.log (listaCategorias);
    // Crear las opciones del select
    let option = document.createElement("option");
    option.value = "todas";
    option.text = "TODAS";
    select.appendChild(option);


    // Crear el resto de opciones
    for (let cat of listaCategorias) {
        option = document.createElement("option");
        option.value = cat;
        option.text = cat;
        // Lo añadimos al select
        select.appendChild(option);
    }

    // Añadir la interactividad al select
    select.addEventListener ("change", function (){

        // Limpiamos tarjetas
        listaActividades.textContent = "";
        // Nos quedamos con la categoria seleccionada
        let categoriaSeleccionada = select.value;
        if (categoriaSeleccionada == "todas") {
            pintarTarjetas(actividades);
        } else {
            //Nos construimos un array con las actividades que pertenezcan solo a esa categoria filtrada
            function filtro (act){
                if (categoriaSeleccionada == act.categoria) {
                    return true;
                }
            }
            let actividadesFiltradas = actividades.filter (filtro);
            pintarTarjetas(actividadesFiltradas);
        }
    });

    // Añadir interactividad al boton
    btnPlazas.addEventListener ("click", function (){

        // Limpiamos tarjetas
        listaActividades.textContent = "";

        if (btnPlazas.textContent == "Mostrar solo con plazas") {
            // Filtrar aquellas actividades que tienen plazas > 0    
            function filtroPlazas (act) {
                if (act.plazas > 0) {
                    return true;
                }
            }
            let actividadesFiltradas = actividades.filter (filtroPlazas);
            btnPlazas.textContent = "Mostrar todas";
            pintarTarjetas(actividadesFiltradas);

        }else {
            pintarTarjetas (actividades);
            btnPlazas.textContent = "Mostrar solo con plazas";
        }

    });




});