function irIndex(){
    window.location.href = "../index.html";
}

function login() {
    var rut = document.getElementById("rut").value;
    var password = document.getElementById("password").value;
    var listaDocentes = JSON.parse(localStorage.getItem("listaDocentes")) || [];

    // Verificar si es administrador
    if (rut === "admin" && password === "admin") {
        alert("Bienvenido, Administrador");
        window.location.href = "admin.html"; // Redirigir a la página de administración
    } else {
        var usuarioEncontrado = listaDocentes.find(docente => docente.rut === rut && docente.password === password);

        if (usuarioEncontrado) {
            alert("Bienvenido, " + usuarioEncontrado.nombre + " " + usuarioEncontrado.apellido);
            localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado)); // Guardar usuario actual
            window.location.href = "perfil.html"; // Redirigir a la página de perfil del docente
        } else {
            alert("RUT o contraseña incorrectos. Inténtelo de nuevo.");
        }
    }
}

