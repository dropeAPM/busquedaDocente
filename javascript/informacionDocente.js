window.onload = function() {
    var docente = JSON.parse(localStorage.getItem("docenteEncontrado"));

    if (docente) {
        document.getElementById("rut").value = docente.rut;
        document.getElementById("nombre").value = docente.nombre;
        document.getElementById("apellido").value = docente.apellido;
        document.getElementById("inf").value = docente.inf;
        document.getElementById("email").value = docente.email;
    } else {
        alert("No se encontraron datos del docente.");
        window.location.href = "index.html";
    }
}

