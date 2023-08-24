document.addEventListener("DOMContentLoaded", function () {

    const btnagregar = document.getElementById("agregar");
    const lista = document.getElementById("contenedor");

    btnagregar.addEventListener("click", function (event) {
        event.preventDefault();

        const agregar = document.getElementById("item");
        let elementos = [];
        if (agregar.value !== "") {
            elementos.push(agregar.value);
            agregar.value = "";
        } else {
            alert("Ingrese elementos en Nuevo Ítem");
        }

        printall(elementos);
        console.log(elementos);
        let elementjs = JSON.stringify(elementos);
        localStorage.setItem("Guardados", elementjs);
        localStorage.setItem("Imprimir", true);
    });
    
    

    const btnlimpiar = document.getElementById("limpiar");

    btnlimpiar.addEventListener("click", function () {
        localStorage.removeItem("Guardados");
        localStorage.removeItem("Imprimir");
        elementos = [];
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    });

    let imprimo = localStorage.getItem("Imprimir");

    if (imprimo) {
        elementos = localStorage.getItem("Guardados");
        elementjs = JSON.parse(elementos);
        console.log(elementjs);
        printall(elementjs);
    };
    
    function printall (element) {
    
        for (let i = 0; i < element.length; i++) {
            lista.innerHTML += "<li>" + element[i] + "</li>";
        }
    };
});

