window.onload = function() {
    var docentes = JSON.parse(localStorage.getItem("docenteEncontrado"));

    if (docentes && docentes.length > 0) {
        var detalleContainer = document.getElementById("docenteDetalle");

        docentes.forEach(function(docente) {
            var docenteCard = document.createElement("div");
            docenteCard.className = "card mb-3";
            docenteCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${docente.nombre} ${docente.apellido}</h5>
                    <p class="card-text"><strong>Rut:</strong> ${docente.rut}</p>
                    <p class="card-text"><strong>Informacion:</strong> ${docente.inf}</p>
                    <p class="card-text"><strong>Email:</strong> ${docente.email}</p>
                </div>
            `;
            detalleContainer.appendChild(docenteCard);
        });
    } else {
        alert("No se encontraron datos del docente.");
        window.location.href = "../index.html";
    }
}

