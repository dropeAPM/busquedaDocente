function buscarDocente() {
    var busqueda = document.getElementById("busq").value.toLowerCase();
    var listaDocentes = JSON.parse(localStorage.getItem("listaDocentes")) || [];

    if (busqueda === "") {
        localStorage.setItem("docenteEncontrado", JSON.stringify(listaDocentes));
        window.location.href = "html/docente.html";
    } else {
        var resultado = listaDocentes.filter(function(docente) {
            return docente.rut.toLowerCase().includes(busqueda) || 
                   docente.nombre.toLowerCase().includes(busqueda);
        });

        if (resultado.length > 0) {
            localStorage.setItem("docenteEncontrado", JSON.stringify(resultado));
            window.location.href = "html/docente.html";
        } else {
            alert("No se encontraron coincidencias.");
        }
    }
}
