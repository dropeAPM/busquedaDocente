window.onload = function() {
    var listaDocentes = JSON.parse(localStorage.getItem("listaDocentes")) || [];
    var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    if (usuarioActual) {
        document.getElementById("nombre").value = usuarioActual.nombre;
        document.getElementById("apellido").value = usuarioActual.apellido;
        document.getElementById("inf").value = usuarioActual.inf;
        document.getElementById("email").value = usuarioActual.email;
        document.getElementById("password").value = usuarioActual.password;
    } else {
        alert("No se encontró información del usuario. Por favor, inicie sesión nuevamente.");
        window.location.href = "login.html";
    }
};

function guardarCambios() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var inf = document.getElementById("inf").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var listaDocentes = JSON.parse(localStorage.getItem("listaDocentes")) || [];
    var usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    if (usuarioActual) {
        // Actualizar los datos del usuario actual
        usuarioActual.nombre = nombre;
        usuarioActual.apellido = apellido;
        usuarioActual.inf = inf;
        usuarioActual.email = email;
        usuarioActual.password = password;

        // Actualizar en la lista general de docentes
        var indice = listaDocentes.findIndex(docente => docente.rut === usuarioActual.rut);
        if (indice !== -1) {
            listaDocentes[indice] = usuarioActual;
            localStorage.setItem("listaDocentes", JSON.stringify(listaDocentes)); // Guardar lista actualizada
            localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual)); // Actualizar usuario actual en localStorage
            alert("Cambios guardados correctamente.");
        } else {
            alert("Error al guardar los cambios. Inténtelo nuevamente.");
        }
    } else {
        alert("No se encontró información del usuario. Por favor, inicie sesión nuevamente.");
        window.location.href = "login.html";
    }
}

