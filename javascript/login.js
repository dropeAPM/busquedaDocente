function irIndex(){
    window.location.href = "../index.html";
}
window.onload = function() {
    // Verificar si el admin ya está registrado, si no, agregarlo.
    var listaDocentes = JSON.parse(localStorage.getItem("listaDocentes")) || [];
    var admin = listaDocentes.find(docente => docente.rut === "admin");

    if (!admin) {
        listaDocentes.push({
            rut: "0001",
            nombre: "Docente1",
            apellido: "Apellido1",
            inf: "[horario del docente]",
            email: "Docente1@correo.com",
            password: "123"
        });
        localStorage.setItem("listaDocentes", JSON.stringify(listaDocentes));
    }
};

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

