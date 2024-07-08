window.onload = function() {
    var docentes = JSON.parse(localStorage.getItem("docenteEncontrado"));

    if (docentes) {
        var detalleContainer = document.getElementById("docenteDetalle");

        if (Array.isArray(docentes)) {
            docentes.forEach(function(docente) {
                var docenteCard = document.createElement("div");
                docenteCard.className = "card mb-3";
                docenteCard.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${docente.nombre} ${docente.apellido}</h5>
                        <p class="card-text"><strong>Rut:</strong> ${docente.rut}</p>
                        <p class="card-text"><strong>Informacion:</strong> ${docente.inf}</p>
                        <p class="card-text"><strong>Email:</strong> ${docente.email}</p>
                        <p class="card-text"><strong>Contraseña:</strong> ${docente.password}</p>
                    </div>
                `;
                detalleContainer.appendChild(docenteCard);
            });
        } else {
            detalleContainer.innerHTML = `
                <hr>
                <div class="form-group col-md-6 mb-3">
                    <label for="rut">Rut</label>
                    <input type="text" id="rut" class="form-control" value="${docentes.rut}" disabled>
                </div>
                <div class="form-group col-md-6 mb-3">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" class="form-control" value="${docentes.nombre}" disabled>
                </div>
                <div class="form-group col-md-6 mb-3">
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" class="form-control" value="${docentes.apellido}" disabled>
                </div>
                <div class="form-group col-md-6 mb-3">
                    <label for="inf">Informacion</label>
                    <input type="text" id="inf" class="form-control" value="${docentes.inf}" disabled>
                </div>
                <div class="form-group col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" value="${docentes.email}" disabled>
                </div>
                <hr>
            `;
        }
    } else {
        alert("No se encontraron datos del docente.");
        window.location.href = "index.html";
    }
}

