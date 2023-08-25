document.addEventListener("DOMContentLoaded", function () {

    const btnagregar = document.getElementById("agregar");
    const lista = document.getElementById("contenedor");

    let elementos = []; // Inicializa el array fuera del evento 'click'

    btnagregar.addEventListener("click", function (event) {
        event.preventDefault();

        const agregar = document.getElementById("item");

        if (agregar.value !== "") {
            elementos.push(agregar.value);
            agregar.value = "";
        } else {
            alert("Ingrese elementos en Nuevo Ítem");
        }

        printall(elementos);
        localStorage.setItem('elementos', JSON.stringify(elementos));
    });

    const btnlimpiar = document.getElementById("limpiar");

    btnlimpiar.addEventListener("click", function () {
        localStorage.removeItem("elementos"); // Cambiado a 'elementos'
        elementos = [];
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    });

    let elementosGuardados = localStorage.getItem('elementos'); // Cambiado a 'elementos'

    if (elementosGuardados) {
        elementos = JSON.parse(elementosGuardados); // Cambiado a 'elementos'
        printall(elementos);
    }

    function printall(element) {
        lista.innerHTML = ""; // Limpiar la lista antes de agregar los elementos nuevamente

        for (let i = 0; i < element.length; i++) {
            lista.innerHTML += "<li>" + element[i] + "</li>";
        }
    };
});
