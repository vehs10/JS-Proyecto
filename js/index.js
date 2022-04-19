//FUNCIONES 

function IngresoWeb() {
    Swal.fire({
        title: 'Se Ingresaron correctamente hacia la consola',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

function contraseña() {
    Swal.fire({
        title: 'No Contamos con Bases de datos para almacenar y cambiar contraseñas :(',
        showConfirmButton: false,
        timer: 1500
    })
}


//EVENTOS Y FUNCIONAMIENTO DEL INDEX

const botonIndex = document.getElementById('botonIndex');
botonIndex.addEventListener("click", IngresoWeb);

const cambiarContraseña = document.getElementById('CambiarContraseña');
cambiarContraseña.addEventListener("click", contraseña);





let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
        //Obtengo el valor del primero hijo <input type="text">
    console.log("Usuario:" + " " + formulario.children[0].value);
    localStorage.setItem('Usuario', formulario.children[0].value);
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log("Contraseña:" + " " + formulario.children[1].value);
}

//Usamos AJax y el metodo get
const URLJSON = "text.json"

$("#btnget").click(() => {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            for (const dato of misDatos) {
                console.log("Nombre Del Desarrolador: " + dato.name);
                console.log("Edad del Desarrollador: " + dato.id)

            }
        }
    });
});