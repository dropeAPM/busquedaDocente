function validarForm(){
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var inf = document.getElementById("inf").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (rut === "" || nombre === "" || apellido === "" || inf === "" || email === "" || password === ""){
        alert("Debes rellenar todos los campos!");
        return false;
    }
    else if(!email.includes("@")){
        alert("Email invalido");
        return false;
    }
    return true;
}

function mostrarData(){
    var listaDocentes;
    if(localStorage.getItem("listaDocentes") === null){
        listaDocentes = [];
    } else {
        listaDocentes = JSON.parse(localStorage.getItem("listaDocentes"));
    }

    var html = "";

    listaDocentes.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.rut + "</td>";
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.apellido + "</td>";
        html += "<td>" + element.inf + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.password + "</td>";
        html += '<td><button onclick="borrarData(' + index + ')" class="btn btn-danger">Borrar</button><button onclick="actualizarData(' + index + ')" class="btn btn-warning">Editar</button></td>';
        html += "</tr>";
    });
    document.querySelector("#tablaCrud tbody").innerHTML = html;
}

// muestra todo lo que esta en Localstorage cuando la pagina se muestre
window.onload = mostrarData;

function agregarData(){
    if(validarForm() === true){
        var rut = document.getElementById("rut").value;
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var inf = document.getElementById("inf").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var listaDocentes;
        if(localStorage.getItem("listaDocentes") === null){
            listaDocentes = [];
        } else {
            listaDocentes = JSON.parse(localStorage.getItem("listaDocentes"));
        }
        listaDocentes.push({
            rut: rut,
            nombre: nombre,
            apellido: apellido,
            inf: inf,
            email: email,
            password: password,
        });
        localStorage.setItem("listaDocentes", JSON.stringify(listaDocentes));
        
        mostrarData();

        document.getElementById("rut").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("inf").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}

function borrarData(index){
    var listaDocentes = JSON.parse(localStorage.getItem("listaDocentes"));
    listaDocentes.splice(index, 1);
    localStorage.setItem("listaDocentes", JSON.stringify(listaDocentes));
    mostrarData();
}

function actualizarData(index){
    var listaDocentes = JSON.parse(localStorage.getItem("listaDocentes"));
    document.getElementById("rut").value = listaDocentes[index].rut;
    document.getElementById("nombre").value = listaDocentes[index].nombre;
    document.getElementById("apellido").value = listaDocentes[index].apellido;
    document.getElementById("inf").value = listaDocentes[index].inf;
    document.getElementById("email").value = listaDocentes[index].email;
    document.getElementById("password").value = listaDocentes[index].password;

    document.getElementById("actualizar").onclick = function(){
        listaDocentes[index].rut = document.getElementById("rut").value;
        listaDocentes[index].nombre = document.getElementById("nombre").value;
        listaDocentes[index].apellido = document.getElementById("apellido").value;
        listaDocentes[index].inf = document.getElementById("inf").value;
        listaDocentes[index].email = document.getElementById("email").value;
        listaDocentes[index].password = document.getElementById("password").value;
        
        localStorage.setItem("listaDocentes", JSON.stringify(listaDocentes));
        mostrarData();
        
        document.getElementById("rut").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("inf").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        
        document.getElementById("agregar").style.display = "inline";
        document.getElementById("actualizar").style.display = "none";
    }

    document.getElementById("agregar").style.display = "none";
    document.getElementById("actualizar").style.display = "inline";
}




