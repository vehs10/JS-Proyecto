//AGREGANDO LOS PRODUCTOS CON HTML DINAMICO CON JQ Y JS
for (const dato of Datosapp) {
    $("#contenidogenerado").append(`<div class="card grid" style="width: 18rem;">
    <img src="${dato.imagen}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${dato.nombre}</h5>
      <p class="card-text font-weight-bold">$${dato.precio}</p>
      <button  class="btn btn-success btnComprar" id = ${dato.id}>COMPRAR</button>
    </div>
  </div>`);
}


//FUNCIONES Y EVENTOS
$(".btnComprar").click(agregarProducto);

function agregarProducto(e) {
    //ver si el producto si el producto logra ingresar al carrito con el metodo find
    let producto = Seleccionados.find(producto => producto.id == e.target.id);
    if (producto != undefined) {
        //si esta en el carrito
        producto.addCantidad();
    } else {
        //Usamos else en caso de que no este en el carrito y recorrremos el array de dato en busca del elemento
        let seleccionado = Datosapp.find(producto => producto.id == e.target.id);
        Seleccionados.push(new Producto(seleccionado));
    }
    // Imprimo en la consola para verificar que estoy tomando el producto correcto!!
    console.log(Seleccionados);

    MostrarCarrito();
}

function MostrarCarrito() {

    $("#carrito").empty();
    let total = 0;
    for (const comprado of Seleccionados) {
        total = total + comprado.precio
        $("#carrito").append(`<p>${comprado.nombre}  <span class="font-weight-bold">$ ${comprado.precio}</span></p>
        <button id=${comprado.id} class="btn btn-danger btnBorrar">x</button> <hr>`);
    }

    $(".btnBorrar").click(function(e) {
        e.preventDefault();
        EliminarProducto(e.target.id);
        MostrarCarrito();
    });

    $("#carrito").append(`<p class="font-weight-bold"1>Precio Total:   ${total} $</p>`)
}

function EliminarProducto(id) {
    //Usamos filter para eliminar el elemento seleccionado
    Seleccionados = Seleccionados.filter(producto => producto.id != id);
}

function FinalizarCompra() {
    Swal.fire({
        title: 'Tu Compra ha sido Exitosa :D,  Te enviamos un mail con la fecha de entrega',
        showConfirmButton: false,
        timer: 2500
    })

}
$(".Fcompra").click(function(e) {
    FinalizarCompra();
});
//ANIMACIONES
$("#notificacion1").append(`<h3 class="text-white">Bievenido a Nuestra Tienda Online</h3>`)
$("h3").fadeOut("slow", function() {

    $("h3").fadeIn(2000);
});

//LOCAL STORAGE

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("Listado de Productos", JSON.stringify(Datosapp));