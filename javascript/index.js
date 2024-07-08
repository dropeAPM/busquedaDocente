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

        if (resultado.length === 1) {
            localStorage.setItem("docenteEncontrado", JSON.stringify(resultado[0]));
            window.location.href = "detalle_docente.html";
        } else if (resultado.length > 1) {
            alert("Se encontraron múltiples coincidencias. Por favor, sea más específico.");
        } else {
            alert("No se encontraron coincidencias.");
        }
    }
}
